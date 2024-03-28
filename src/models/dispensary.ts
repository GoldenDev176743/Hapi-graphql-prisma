export const getDispensaryById = async (context, id) => {
    return context.prisma.dispensary.findUnique({
        where: { id: id || undefined },
    })
}

export const getAllDispensaires = async (context) => {
    return context.prisma.dispensary.findMany({
    })
}

export const getDispensairesByOrganizationId = async (context, organizationId) => {
    if(organizationId === 'all'){
        return context.prisma.dispensary.findMany({
        })
    }else{
        return context.prisma.dispensary.findMany({
            where: { organizationId: organizationId || undefined },
        })
    }
}

export const getMetrcInfoByDispensaryId = async (context, id) => {
    return context.prisma.dispensary.findUnique({
        where: { id: id || undefined },
        select: {
            metrcConnectionStatus: true,
            metrcApiKey: true,
            metrcLicenseNumber: true,
            id: true
        },
    })
}
