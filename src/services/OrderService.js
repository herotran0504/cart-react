import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const OrderService = {
    checkout: async (cartId, user) => {
        try {
            const payload = {
                cartId: cartId,
                name: user.name,
                email: user.email,
                phone: user.phone,
                street: user.street,
                city: user.city,
                zip: user.zip,
                creditCartType: user.creditCartType,
                cardNumber: user.cardNumber,
                expireDate: user.date,
                validationCode: user.cvv,
            };
            const res = await axios.post(`${BASE_URL}/api/orders`, payload);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    getOrders: async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/orders`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    getOrder: async (orderId) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/orders/${orderId}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    updateOrderStatus: async (orderId) => {
        try {
            const res = await axios.put(`${BASE_URL}/api/orders/${orderId}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },
};

export default OrderService;
