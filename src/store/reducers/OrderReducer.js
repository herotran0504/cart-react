import {FETCH_ORDERS, FETCH_ORDER_DETAILS} from '../actions/OrderActions';

const initialState = {
    orders: [],
    orderDetails: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            // Update the orders array in the state with the fetched orders
            return {
                ...state,
                orders: '',
            };

        case FETCH_ORDER_DETAILS:
            // Update the orderDetails in the state with the fetched order details
            return {
                ...state,
                orderDetails: '',
            };

        default:
            return state;
    }
};

export default orderReducer;
