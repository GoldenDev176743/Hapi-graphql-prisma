import { Context } from '../context'
import { MutationResolvers } from '../generated/graphql'
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient, Prisma } from '@prisma/client'
dotenv.config();

export const Mutation = {
    createOrganization: async (_parent, _args, context) => {
        const creation = await context.prisma.organization.create({
            data: _args.input
        });
        return creation;
    },
    createDispensary: async (_parent, _args, context) => {
        const creation = await context.prisma.dispensary.create({
            data: _args.input
        });
        return creation;
    },
    createSupplier: async (_parent, _args, context) => {
        const creation = await context.prisma.supplier.create({
            data: _args.input
        });
        return creation;
    },
    createUser: async (_parent, _args, context) => {
        // const creation = await context.prisma.user.create({
        //     data: _args.input
        // });
        // return creation;
        try {
            const creation = await context.prisma.user.create({
                data: _args.input
            });
            return creation
        } catch (e) {

            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
              const responseCode = e.code

              if (e.code === 'P2002') {
                console.log(
                  'A new user cannot be created with this email'
                )
              }
            }
            throw e
        }
    },
    createCustomer: async (_parent, _args, context) => {
        const creation = await context.prisma.customer.create({
            data: _args.input
        });
        return creation;
    },
    createLoyalty: async (_parent, _args, context) => {
        const creation = await context.prisma.loyalty.create({
            data: _args.input
        });
        return creation;
    },
    createDiscount: async (_parent, _args, context) => {
        const creation = await context.prisma.discount.create({
            data: _args.input
        });
        return creation;
    },
    createItemCategory: async (_parent, _args, context) => {
        const creation = await context.prisma.itemCategory.create({
            data: _args.input
        });
        return creation;
    },
    createTaxSetting: async (_parent, _args, context) => {
        const creation = await context.prisma.taxSetting.create({
            data: _args.input
        });
        return creation;
    },
    updateOrganization: async (_parent, _args, context) => {
        const updating = await context.prisma.organization.update({
            where: {
                id: _args.input.id,
              },
              data: {
                name: _args.input.name,
                phone: _args.input.phone,
              }
        });
        return updating;
    },
    updateDispensary: async (_parent, _args, context) => {
        const updating = await context.prisma.dispensary.update({
            where: {
                id: _args.input.id,
              },
              data: {
                name: _args.input.name,
                dispensaryType: _args.input.dispensaryType,
                businessLicense: _args.input.businessLicense,
                phone: _args.input.phone,
                email: _args.input.email,
                locationAddress: _args.input.locationAddress,
                locationCity: _args.input.locationCity,
                locationState: _args.input.locationState,
                locationZipCode: _args.input.locationZipCode,
              }
        });
        return updating;
    },
    updateSupplier: async (_parent, _args, context) => {
        const updating = await context.prisma.supplier.update({
            where: {
                id: _args.input.id,
              },
              data: {
                name: _args.input.name,
                supplierType: _args.input.supplierType,
                businessLicense: _args.input.businessLicense,
                UBI: _args.input.UBI,
                phone: _args.input.phone,
                email: _args.input.email,
                locationAddress: _args.input.locationAddress,
                locationCity: _args.input.locationCity,
                locationState: _args.input.locationState,
                locationZipCode: _args.input.locationZipCode,
                isActive: _args.input.isActive
              }
        });
        return updating;
    },
    updateUser: async (_parent, _args, context) => {
        const updating = await context.prisma.user.update({
            where: {
                id: _args.input.id,
              },
              data: {
                userType: _args.input.userType,
                email: _args.input.email,
                name: _args.input.name,
                phone: _args.input.phone,
                isActive: _args.input.isActive,
                isOrganizationAdmin: _args.input.isOrganizationAdmin,
                isDispensaryAdmin: _args.input.isDispensaryAdmin,
              }
        });
        return updating;
    },
    updateCustomer: async (_parent, _args, context) => {
        const updating = await context.prisma.customer.update({
            where: {
                id: _args.input.id,
              },
            data: {
                name: _args.input.name,
                MFType: _args.input.MFType,
                birthday: _args.input.birthday,
                email: _args.input.email,
                phone: _args.input.phone,
                isActive: _args.input.isActive,
                driverLicense: _args.input.driverLicense,
                driverLicenseExpirationDate: _args.input.driverLicenseExpirationDate,
                isMedical: _args.input.isMedical,
                medicalLicense: _args.input.medicalLicense,
                medicalLicenseExpirationDate: _args.input.medicalLicenseExpirationDate,
            }
        });
        return updating;
    },
    updateLoyalty: async (_parent, _args, context) => {
        const updating = await context.prisma.loyalty.update({
            where: {
                id: _args.input.id,
              },
            data: {
                name: _args.input.name,
                type: _args.input.type,
                pointWorth: _args.input.pointWorth,
                applyDurationSet: _args.input.applyDurationSet,
                applyFrom: _args.input.applyFrom,
                applyTo: _args.input.applyTo,
                isActive: _args.input.isActive,
                isAdminPin: _args.input.isAdminPin,
                color: _args.input.color,
            }
        });
        return updating;
    },
    updateDiscount: async (_parent, _args, context) => {
        const updating = await context.prisma.discount.update({
            where: {
                id: _args.input.id,
              },
            data: {
                name: _args.input.name,
                type: _args.input.type,
                discountPercent: _args.input.discountPercent,
                applyDurationSet: _args.input.applyDurationSet,
                applyFrom: _args.input.applyFrom,
                applyTo: _args.input.applyTo,
                isActive: _args.input.isActive,
                isAdminPin: _args.input.isAdminPin,
                color: _args.input.color,
            }
        });
        return updating;
    },
    updateItemCategory: async (_parent, _args, context) => {
        const updating = await context.prisma.itemCategory.update({
            where: {
                id: _args.input.id,
              },
            data: {
                name: _args.input.name,
            }
        });
        return updating;
    },
    updateTaxSetting: async (_parent, _args, context) => {
        const updating = await context.prisma.taxSetting.update({
            where: {
                id: _args.input.id,
              },
            data: {
                name: _args.input.name,
                rate: _args.input.rate,
                categories: _args.input.categories,
                applyTo: _args.input.applyTo,
            }
        });
        return updating;
    },
    metrcConnectionUpdate: async (_parent, _args, context) => {
        const updating = await context.prisma.dispensary.update({
            where: {
                id: _args.input.dispensaryId,
              },
              data: {
                metrcConnectionStatus: _args.input.metrcConnectionStatus,
                metrcApiKey: _args.input.metrcApiKey,
                metrcLicenseNumber: _args.input.metrcLicenseNumber,
              }
        });
        return updating;
    },
    deleteOrganization: async (_parent, _args, context) => {
        const deletetion = await context.prisma.organization.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    deleteDispensary: async (_parent, _args, context) => {
        const deletetion = await context.prisma.dispensary.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    deleteSupplier: async (_parent, _args, context) => {
        const deletetion = await context.prisma.supplier.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    deleteUser: async (_parent, _args, context) => {
        const deletetion = await context.prisma.user.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    deleteCustomer: async (_parent, _args, context) => {
        const deletetion = await context.prisma.customer.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    deleteLoyalty: async (_parent, _args, context) => {
        const deletetion = await context.prisma.loyalty.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    deleteDiscount: async (_parent, _args, context) => {
        const deletetion = await context.prisma.discount.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    deleteItemCategory: async (_parent, _args, context) => {
        const deletetion = await context.prisma.itemCategory.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    deleteTaxSetting: async (_parent, _args, context) => {
        const deletetion = await context.prisma.taxSetting.delete({
            where: {
                id: _args.id,
            },
        });
        return deletetion;
    },
    loginUser: async (_parent, _args, context) => {

        const userInfo = await context.prisma.user.findUnique({
            where: {
                email: _args.input.email,
                password: _args.input.password
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
                token =  Jwt.sign(
                {
                    userId: userInfo.id, 
                    email: userInfo.email, 
                    name: userInfo.name,
                    userType: userInfo.userType,
                    dispensaryId: userInfo.dispensaryId,
                    isActive: userInfo.isActive,
                    isDispensaryAdmin: userInfo.isDispensaryAdmin,
                    isEmailVerified: userInfo.isEmailVerified,
                    isOrganizationAdmin: userInfo.isOrganizationAdmin,
                    locationState: dispensaryInfo.locationState,
                },
                process.env.JWTSECRET,
                {
                  expiresIn: "3h",
                }
            );
        }else{
            token =  Jwt.sign(
                {
                    userId: '', 
                },
                process.env.JWTSECRET,
                {
                  expiresIn: "3h",
                }
            );
        }
        userData = {
            token: token,
        }
    return userData
    },
} satisfies MutationResolvers