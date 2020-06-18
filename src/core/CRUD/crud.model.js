export const modelingOrders = (ordersObj) => {
    let orders = []
    for (let id in ordersObj) {
        orders.push({
            id,
            ...ordersObj[id]
        })
    }
    return orders
}