import {FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS} from '../actions/CartActions';

const initialState = {
    cart: {cartId: "", items: [], total: 0.0},
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
            };
        case FETCH_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;