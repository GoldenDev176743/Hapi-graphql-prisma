export const getDiscountById = async (context, id) => {
    return context.prisma.discount.findUnique({
        where: { id: id || undefined },
    })
}

export const getAllDiscountsByDispensaryId = async (context, dispensaryId) => {
    if(dispensaryId === 0){
        return context.prisma.discount.findMany({
        })
    }else{
        return context.prisma.discount.findMany({
            where: { dispensaryId: dispensaryId || undefined },
        })
    }
}