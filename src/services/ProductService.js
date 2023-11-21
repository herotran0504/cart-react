import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const ProductService = {
    getProductByCategory: async (categoryName) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/search?categoryName=${categoryName}`);
            return response.data;
        } catch (error) {
            console.error('Error getting product by categoryName:', error);
            throw error;
        }
    },
    getProductByProductNumber: async (productNumber) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/${productNumber}`);
            return response.data;
        } catch (error) {
            console.error('Error getting product by productNumber:', error);
            throw error;
        }
    },
    getProductByPrice: async (minPrice, maxPrice) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/search?minPrice=${minPrice}&maxPrice=${maxPrice}`);
            return response.data;
        } catch (error) {
            console.error('Error getting product by price:', error);
            throw error;
        }
    },
    getProductByPriceAndCategory: async (categoryName, minPrice, maxPrice) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/products/search?categoryName=${categoryName}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
            return response.data;
        } catch (error) {
            console.error('Error getting product by price and category:', error);
            throw error;
        }
    },
    addProduct: async (product) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/products`, product);
            return response.data;
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    },
    updateProduct: async (product) => {
        try {
            const response = await axios.put(`${BASE_URL}/api/products/${product.productNumber}`, product);
            return response.data;
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    },
    deleteProduct: async (productNumber) => {
        try {
            const response = await axios.delete(`${BASE_URL}/api/products/${productNumber}`);
            return response.data;
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    }
};