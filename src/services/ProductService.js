import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const ProductService = {
    getProductByCategory:  async (categoryName) => {
        const response = await axios.get(`${BASE_URL}/api/products/search?categoryName=${categoryName}`);
        return response.data;
    },
    getProductByPrice: async (minPrice, maxPrice) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/search?minPrice=${minPrice}&maxPrice=${maxPrice}`);
            return response.data;
        } catch (error) {
            console.error('Error getting cart:', error);
            throw error;
        }
    },
    getProductByPriceAndCategory: async (categoryName, minPrice, maxPrice) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/search?categoryName=${categoryName}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
            return response.data;
        } catch (error) {
            console.error('Error getting cart:', error);
            throw error;
        }
    }
};