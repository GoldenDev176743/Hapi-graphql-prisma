export const getUserById = async (context, id) => {
    return context.prisma.user.findUnique({
        where: { id: id || undefined },
    })
}

export const getAllUsersByDispensaryId = async (context, dispensaryId) => {
    if(dispensaryId === 'all'){
        return context.prisma.user.findMany({
        })
    }else{
        return context.prisma.user.findMany({
            where: { dispensaryId: dispensaryId || undefined },
        })
    }
}