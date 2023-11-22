import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const CartService = {
    getCart: async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/carts`);
            return res.data;
        } catch (error) {
            console.error('Error getting cart:', error);
            throw error;
        }
    },

    addCartItem: async (productNumber) => {
        try {
            const res = await (axios.post(`${BASE_URL}/api/carts`, {productNumber: productNumber}));
            return res.data;
        } catch (error) {
            console.error('Error getting cart:', error);
            throw error;
        }
    },

    removeCartItem: async (productNumber) => {
        try {
            const payload = {productNumber: productNumber};
            const res = await axios.delete(`${BASE_URL}/api/carts`, {data: payload});
            return res.data;
        } catch (error) {
            console.error('Error getting cart:', error);
            throw error;
        }
    },

    increaseItemQuantity: async (cartId, productNumber) => {
        try {
            const payload = {productNumber: productNumber, quantity: 1, operation: "increase"};
            const res = await axios.post(`${BASE_URL}/api/carts/${cartId}/items`, payload);
            return res.data;
        } catch (error) {
            console.error('Error updating cart item:', error);
            throw error;
        }
    },

    decreaseItemQuantity: async (cartId, productNumber) => {
        try {
            const payload = {productNumber: productNumber, quantity: 1, operation: "decrease"};
            const res = await axios.post(`${BASE_URL}/api/carts/${cartId}/items`, payload);
            return res.data;
        } catch (error) {
            console.error('Error updating cart item:', error);
            throw error;
        }
    }

};

export default CartService;
