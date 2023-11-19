import {ProductService} from "../../services/ProductService";
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
});

export const fetchProductByCategory = (categoryName) => async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
        const productData = await ProductService.getProductByCategory(categoryName);
        dispatch(fetchProductsSuccess(productData));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message));
    }
};

