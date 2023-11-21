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
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.error('Error getting cart:', error);
            throw error;
        }
    },

    removeCartItem: async (productNumber) => {
        try {
            const res = await axios.delete(`${BASE_URL}/api/carts`, {data: {productNumber: productNumber}});
            return res.data;
        } catch (error) {
            console.error('Error getting cart:', error);
            throw error;
        }
    },

    updateCartItem: async (productNumber, quantity) => {
        try {
            const res = await axios.put(`${BASE_URL}/api/cart/${productNumber}`, {quantity});
            return res.data;
        } catch (error) {
            console.error('Error updating cart item:', error);
            throw error;
        }
    },

    checkout: async (orderData) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/orders`, orderData);
            return res.data;
        } catch (error) {
            console.error('Error during checkout:', error);
            throw error;
        }
    }
};

export default CartService;
