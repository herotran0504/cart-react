import React from 'react';
import {useLocation} from "react-router-dom";
import {ReviewList} from "./components/ReviewList";
import RatingStar from "./components/RatingStar";
import ProductDetail from "./components/ProductDetail";
import ReviewFrame from "./components/ReviewFrame";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ProductDetailsPage = () => {
    const location = useLocation();
    const productItem = location.state.item;
    console.log(productItem);
    const handleAddComment = () => {
        alert("Add comment coming soon :)")
    }

    const handleAddToCart = () => {
        alert("Add to cart coming soon:)")
    }
    return (
        <div>
            <Header/>
            <div className="product-detail-page">
                <h1>Product details page</h1>
                <div className="container">
                    <div className="product-detail-item">
                        <ProductDetail productItem={productItem} onAddToCart={handleAddToCart}/>
                    </div>
                    <div className="product-detail-review">
                        <ReviewFrame reviewList={productItem.reviewDTOList} onAddComment={handleAddComment}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}