export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDER_DETAILS = 'FETCH_ORDER_DETAILS';

export const fetchOrders = () => ({
    type: FETCH_ORDERS,
    payload: '',
});

export const fetchOrderDetails = (orderId) => ({
    type: FETCH_ORDER_DETAILS,
    payload: '',
});
