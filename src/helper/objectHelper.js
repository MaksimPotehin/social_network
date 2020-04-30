export const updateObjInArray = (items, userId, objPropName, newObjProps) => {
    return items.map((item) => {
        if (item[objPropName] === userId) {
            return {...item, ...newObjProps}
        } else {
            return item
        }
    })
}