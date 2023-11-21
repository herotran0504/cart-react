import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ReviewFrame from "./components/ReviewFrame";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ProductService} from "../services/ProductService";

export const ProductDetailsPage = () => {
    const location = useLocation();
    const productNumber = location.state.productNumber;
    const [productItem, setProductItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        ProductService.getProductByProductNumber(productNumber).then(
            data => {
                setProductItem(data);
                setLoading(false);
            }
        ).catch(error => {
            setError(true);
            console.error('Error getProductByProductNumber:', error);
        });
    }, []);

    const handleAddReview = (review) => {
        const updatedProduct = {...productItem, reviewDTOList: productItem.reviewDTOList.concat(review)};
        ProductService.updateProduct(updatedProduct).then(
            data => {
                setProductItem(data);
            }
        )
    }

    const handleAddToCart = () => {
        alert("Add to cart coming soon:)")
    }
    return (
        <div>
            <Header/>
            <div className="product-detail-page">
                <h1>Product details page</h1>
                { loading ? (<p>Loading Product...</p>) : (
                    <div className="container">
                        <div className="product-detail-item">
                            <ProductDetail productItem={productItem} onAddToCart={handleAddToCart}/>
                        </div>
                        <div className="product-detail-review">
                            <ReviewFrame reviewList={productItem.reviewDTOList} onAddReview={handleAddReview}/>
                        </div>
                    </div>)}
            </div>
            <Footer/>
        </div>
    )
}