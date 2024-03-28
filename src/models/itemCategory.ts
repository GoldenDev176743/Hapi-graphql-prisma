export const getItemCategoryById = async (context, id) => {
    return context.prisma.itemCategory.findUnique({
        where: { id: id || undefined },
    })
}

export const getAllItemCategoriesByStateOfUsa = async (context, stateOfUsa) => {
    if(stateOfUsa === 'all'){
        return context.prisma.itemCategory.findMany({
        })
    }else{
        return context.prisma.itemCategory.findMany({
            where: { stateOfUsa: stateOfUsa || undefined },
        })
    }
}