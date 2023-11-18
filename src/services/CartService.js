import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

const CartService = {
    getCart: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/carts`);
            return response.data;
        } catch (error) {
            console.error('Error getting cart:', error);
            throw error;
        }
    },

    updateCartItem: async (productId, quantity) => {
        try {
            const response = await axios.put(`${BASE_URL}/api/cart/${productId}`, { quantity });
            return response.data;
        } catch (error) {
            console.error('Error updating cart item:', error);
            throw error;
        }
    },

    removeCartItem: async (productId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/api/cart/${productId}`);
            return response.data;
        } catch (error) {
            console.error('Error removing cart item:', error);
            throw error;
        }
    },

    checkout: async (orderData) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/orders`, orderData);
            return response.data;
        } catch (error) {
            console.error('Error during checkout:', error);
            throw error;
        }
    }
};

export default CartService;
