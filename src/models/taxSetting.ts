export const getTaxSetting = async (context, id) => {
    return context.prisma.taxSetting.findUnique({
        where: { id: id || undefined },
    })
}

export const getTaxSettingByDispensaryId = async (context, dispensaryId) => {
    return context.prisma.taxSetting.findMany({
        where: { dispensaryId: dispensaryId || undefined },
    })
}