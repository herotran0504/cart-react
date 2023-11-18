export const GET_CART = 'GET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

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
