export const formatStatus = status => status.toUpperCase()

export const getAction = status => {
    const s = status.toUpperCase();
    if ("PLACED" === s) {
        return "To Ship"
    } else if ("SHIPPED" === s) {
        return "To Deliver"
    } else if ("DELIVERED" === s) {
        return "Done"
    } else {
        return "Done"
    }
}

export const isDelivered = status => status && "DELIVERED" === status.toUpperCase()
