import { Context } from '../context'
import * as userModel from '../models/user'
import * as customerModel from '../models/customer'
import * as dispensaryModel from '../models/dispensary'
import * as organizationModel from '../models/organization'
import * as supplierModel from '../models/supplier'
import * as loyaltyModel from '../models/loyalty'
import * as discountModel from '../models/discount'
import * as itemCategory from '../models/itemCategory'
import * as taxSetting from '../models/taxSetting'
import { QueryResolvers } from '../generated/graphql'

export const Query = {
    organization: (_parent, args, context) => {
        return organizationModel.getOrganizationById(context, args.id)
    },
    allOrganizations: (_parent, args, context) => {
        return organizationModel.getAllOrganizations(context)
    },
    
    allDispensaries: (_parent, args, context) => {
        return dispensaryModel.getAllDispensaires(context)
    },
    allDispensariesByOrganizationId: (_parent, args, context) => {
        return dispensaryModel.getDispensairesByOrganizationId(context, args.organizationId)
    },
    dispensary: (_parent, args, context) => {
        return dispensaryModel.getDispensaryById(context, args.id)
    },
    supplier: (_parent, args, context) => {
        return supplierModel.getSupplierById(context, args.id)
    },
    allSuppliersByOrganizationId: (_parent, args, context) => {
        return supplierModel.getAllSuppliersByOrganizationId(context, args.organizationId)
    },
    metrcInfoByDispensaryId: (_parent, args, context) => {
        return dispensaryModel.getMetrcInfoByDispensaryId(context, args.dispensaryId)
    },
    allUsersByDispensaryId: (_parent, args, context) => {
        return userModel.getAllUsersByDispensaryId(context, args.dispensaryId)
    },
    user: (_parent, args, context) => {
        return userModel.getUserById(context, args.id)
    },
    customer: (_parent, args, context) => {
        return customerModel.getCustomerById(context, args.id)
    },
    allCustomersByDispensaryId: (_parent, args, context) => {
        return customerModel.getAllCustomersByDispensaryId(context, args.dispensaryId)
    },
    loyalty: (_parent, args, context) => {
        return loyaltyModel.getLoyaltyById(context, args.id)
    },
    allLoyaltiesByDispensaryId: (_parent, args, context) => {
        return loyaltyModel.getAllLoyaltiesByDispensaryId(context, args.dispensaryId)
    },
    discount: (_parent, args, context) => {
        return discountModel.getDiscountById(context, args.id)
    },
    allDiscountsByDispensaryId: (_parent, args, context) => {
        return discountModel.getAllDiscountsByDispensaryId(context, args.dispensaryId)
    },
    itemCategory: (_parent, args, context) => {
        return itemCategory.getItemCategoryById(context, args.id)
    },
    allItemCategoriesByStateOfUsa: (_parent, args, context) => {
        return itemCategory.getAllItemCategoriesByStateOfUsa(context, args.stateOfUsa)
    },
    taxSetting: (_parent, args, context) => {
        return taxSetting.getTaxSetting(context, args.id)
    },
    allTaxSettingByDispensaryId: (_parent, args, context) => {
        return taxSetting.getTaxSettingByDispensaryId(context, args.dispensaryId)
    },
} satisfies QueryResolvers