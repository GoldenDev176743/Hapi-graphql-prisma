import { Context } from '../context'
import * as userModel from '../models/user'
import * as dispensaryModel from '../models/dispensary'
import * as organizationModel from '../models/organization'
import { OrganizationResolvers } from '../generated/graphql'

export const Organization = {
    dispensaries: (_parent, args, context) => {
        return dispensaryModel.getDispensairesByOrganizationId(context, _parent.id)
    },
} satisfies OrganizationResolvers