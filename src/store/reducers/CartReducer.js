import {GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, CLEAR_CART} from '../actions/CartActions';

const initialState = {
    cart: {cartId: "", items: [], total: 0.0},
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
            };

        case ADD_TO_CART:
        // TODO

        case REMOVE_FROM_CART:
        // TODO

        case UPDATE_CART_ITEM:
        // TODO

        case CLEAR_CART:
        // TODO

        default:
            return state;
    }
};

export default cartReducer;
