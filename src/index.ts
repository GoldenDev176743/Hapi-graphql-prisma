import { ApolloServer, BaseContext } from '@apollo/server'
import hapiApollo from "@as-integrations/hapi"
import { Server } from '@hapi/hapi'
import  resolvers  from './resolvers/index'
import { context } from './context'
import { readFileSync } from 'fs';
import dotenv from "dotenv";
import { DateTime } from 'graphql-scalars/typings/mocks'
dotenv.config()
const Jwt = require('@hapi/jwt');

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const verifyToken = (artifact, secret, options = {}) => {

  try {
      Jwt.token.verify(artifact, secret, options);
      return { isValid: true };
  }
  catch (err:any) {
      return {
          isValid: false,
          error: err.message
      };
  }

};

async function StartServer() {
  const apollo = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
  })

  await apollo.start()

  const app = new Server({
    port: 4000,
  })

  await app.route({
    method: 'POST',
    path: '/api/signin',
    handler: async (request, h) => {
      const email = request.payload["email"];
      const password = request.payload["password"];
      const userInfo = await context.prisma.user.findUnique({
          where: {
              email: email,
              password: password
          }
      });

      let token = ''
      let userData:any;

      if(userInfo){
          const dispensaryInfo = await context.prisma.dispensary.findUnique({
              where: {
                  id: userInfo.dispensaryId,
              }
          });
          token = Jwt.token.generate(
            {
              userId: userInfo.id, 
              email: userInfo.email, 
              name: userInfo.name,
              userType: userInfo.userType,
              dispensaryId: userInfo.dispensaryId,
              organizationId: dispensaryInfo?.organizationId,
              isActive: userInfo.isActive,
              isDispensaryAdmin: userInfo.isDispensaryAdmin,
              isEmailVerified: userInfo.isEmailVerified,
              isOrganizationAdmin: userInfo.isOrganizationAdmin,
              locationState: dispensaryInfo?.locationState,
            },
              process.env.JWTSECRET,
            {
                ttlSec: 5 * 3600
            }
        );          
      }else{
          token =  'none'
      }
      userData = {
          token: token,
      }
  return userData
  },
    options: {
      cors: {
          origin: ['*']  // Set the origin to allow all (*)
      }
  }
  });

  const graphqlMiddleware = async (request, h) => {
      const [bearer, token] = request.headers.authorization.split(' ');
      const decodedToken = Jwt.token.decode(token);
      const validResponse = verifyToken(decodedToken, process.env.JWTSECRET);
      if (!validResponse.isValid) {
          return h.response('Unauthorized').code(401).takeover()
      } else {
          return h.continue;
      }
  };

  // Register the middleware using server.ext before registering the plugin
  app.ext('onRequest', (request, h) => {
    // if (request.path === '/graphql') {
    //     return graphqlMiddleware(request, h);
    // }
    return h.continue;
  });

  await app.register({
    plugin: hapiApollo,
    options: {
      path: '/graphql',
      context: async ({ request, h }) => {
        return {
          prisma: context.prisma,
          h: h,
          request: request
        };
      },
      apolloServer: apollo,
    }
  });
  await app.start()
}

StartServer()
  .then((server) => {
    console.log(`
🚀 Server ready at: http://localhost:4000/graphql
`)
  })
  .catch((err) => console.log(err))


