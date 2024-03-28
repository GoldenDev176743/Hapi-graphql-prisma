export const getCustomerById = async (context, id) => {
    return context.prisma.customer.findUnique({
        where: { id: id || undefined },
    })
}

export const getAllCustomersByDispensaryId = async (context, dispensaryId) => {
    if(dispensaryId === 0){
        return context.prisma.customer.findMany({
        })
    }else{
        return context.prisma.customer.findMany({
            where: { dispensaryId: dispensaryId || undefined },
        })
    }
}