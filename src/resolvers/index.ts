// import {ResolversTypes} from '../generated/graphql'
import { Query } from './query'
import { Mutation } from './mutation'
import { Organization } from './organization'
import { Dispensary } from './dispensary'
import { User } from './user'

const resolvers = {
  Query,
  Mutation,
  Organization,
  Dispensary,
  User
}

export default resolvers
