export const getSupplierById = async (context, id) => {
    return context.prisma.supplier.findUnique({
        where: { id: id || undefined },
    })
}

export const getAllSuppliersByOrganizationId = async (context, organizationId) => {
    return context.prisma.supplier.findMany({
        where: { organizationId: organizationId || undefined },
    })
}