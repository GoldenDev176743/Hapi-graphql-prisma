import { Context } from '../context'
import * as userModel from '../models/user'
import * as dispensaryModel from '../models/dispensary'
import * as organizationModel from '../models/organization'
import { DispensaryResolvers } from '../generated/graphql'

export const Dispensary = {
    organization: (_parent, args, context) => {
        return organizationModel.getOrganizationById(context, _parent.organizationId)
    },
    users: (_parent, args, context) => {
        return userModel.getAllUsersByDispensaryId(context, _parent.id)
    },
    // users: (_parent, args, context) => {
    //     return userModel.getOrganizationById(context, _parent.id)
    // },
} satisfies DispensaryResolvers