export const getOrganizationById = async (context, id) => {
    return context.prisma.organization.findUnique({
        where: { id: id || undefined },
    })
}

export const getAllOrganizations = async (context) => {
    // const baseData = context.prisma.organization.findMany({})
    // const users = context.prisma.organization.findMany({})
    // const output = {
    //     name: baseData.name,
    //     users: 
    // }
    return context.prisma.organization.findMany({
    })
}