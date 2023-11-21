import CartService from "../../services/CartService";

export const FETCH_CART_REQUEST = 'FETCH_CART_REQUEST';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';

export const fetchCartRequest = () => ({type: FETCH_CART_REQUEST});
export const fetchCartSuccess = cartData => ({type: FETCH_CART_SUCCESS, payload: cartData});
export const fetchCartFailure = error => ({type: FETCH_CART_FAILURE, payload: error});

export const fetchCart = () => async (dispatch) => {
    dispatch(fetchCartRequest());
    try {
        const cartData = await CartService.getCart();
        dispatch(fetchCartSuccess(cartData));
    } catch (error) {
        dispatch(fetchCartFailure(error.message));
    }
};

export const addCartItem = (productNumber) => async (dispatch) => {
    dispatch(fetchCartRequest());
    try {
        const cartData = await CartService.addCartItem(productNumber);
        dispatch(fetchCartSuccess(cartData));
    } catch (error) {
        dispatch(fetchCartFailure(error.message));
    }
};

export const removeCartItem = (productNumber) => async (dispatch) => {
    dispatch(fetchCartRequest());
    try {
        const cartData = await CartService.removeCartItem(productNumber);
        dispatch(fetchCartSuccess(cartData));
    } catch (error) {
        dispatch(fetchCartFailure(error.message));
    }
};

export const increaseItemQuantity = (cartId, productNumber) => async (dispatch) => {
    dispatch(fetchCartRequest());
    try {
        const cartData = await CartService.increaseItemQuantity(cartId, productNumber);
        dispatch(fetchCartSuccess(cartData));
    } catch (error) {
        dispatch(fetchCartFailure(error.message));
    }
};

export const decreaseItemQuantity = (cartId, productNumber) => async (dispatch) => {
    dispatch(fetchCartRequest());
    try {
        const cartData = await CartService.decreaseItemQuantity(cartId, productNumber);
        dispatch(fetchCartSuccess(cartData));
    } catch (error) {
        dispatch(fetchCartFailure(error.message));
    }
};
