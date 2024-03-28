export const getLoyaltyById = async (context, id) => {
    return context.prisma.loyalty.findUnique({
        where: { id: id || undefined },
    })
}

export const getAllLoyaltiesByDispensaryId = async (context, dispensaryId) => {
    if(dispensaryId === 0){
        return context.prisma.loyalty.findMany({
        })
    }else{
        return context.prisma.loyalty.findMany({
            where: { dispensaryId: dispensaryId || undefined },
        })
    }
}