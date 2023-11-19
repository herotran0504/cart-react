import React from 'react';
import {useLocation} from "react-router-dom";
import {ReviewList} from "./components/ReviewList";
import RatingStar from "./components/RatingStar";
import ProductDetail from "./components/ProductDetail";
import ReviewFrame from "./components/ReviewFrame";

export const ProductDetailsPage = (props) => {
    const location = useLocation();
    const productItem = location.state.item;
    const handleAddComment = () => {
        alert("Add comment coming soon :)")
    }
    return (
        <div className="product-detail-page">
            <h1>Product details page</h1>
            <div className="container">
                <div className="product-detail-item">
                    <ProductDetail productItem={productItem}/>
                </div>
                <div className="product-detail-review">
                    <ReviewFrame reviewList={productItem.reviewList} onAddComment={handleAddComment}/>
                </div>
            </div>
        </div>
    )
}