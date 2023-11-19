import CartService from "../../services/CartService";

export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export const FETCH_CART_REQUEST = 'FETCH_CART_REQUEST';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';

export const fetchCartRequest = () => ({
    type: FETCH_CART_REQUEST,
});

export const fetchCartSuccess = (cartData) => ({
    type: FETCH_CART_SUCCESS,
    payload: cartData,
});

export const fetchCartFailure = (error) => ({
    type: FETCH_CART_FAILURE,
    payload: error,
});

export const fetchCart = () => async (dispatch) => {
    dispatch(fetchCartRequest());
    try {
        const cartData = await CartService.getCart();
        dispatch(fetchCartSuccess(cartData));
    } catch (error) {
        dispatch(fetchCartFailure(error.message));
    }
};

export const addToCart = (product, quantity) => ({
    type: ADD_TO_CART,
    payload: {product, quantity}
});

export const clearCart = () => ({
    type: CLEAR_CART
});

export const removeFromCart = (productNumber) => ({
    type: REMOVE_FROM_CART,
    payload: {productNumber}
});

export const updateCartItem = (productNumber, quantity) => ({
    type: UPDATE_CART_ITEM,
    payload: {productNumber, quantity}
});
