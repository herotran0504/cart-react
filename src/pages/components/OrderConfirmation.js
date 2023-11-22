import React from "react";
import {Link, useLocation} from "react-router-dom";
import OrderDetailsProductItems from "./OrderDetailsProductItems";

export const OrderConfirmation = () => {
    const orderId = useLocation().state.orderId;
    const link = `/order-details/${orderId}`;
    return (<div className="confirmation-container">
        <img className="image-wrapper" alt=""/>
        <p className="description">Thanks for your purchase!</p>
        <div className="order-number">
            <span className="order-number-label">Your order number is # </span>
            <span className="order-number-value">{orderId}</span>
        </div>
        <p className="order-details">You’ll receive an email confirming your order details</p>
        <Link to={link}>
            <button className="primary-button">View order details</button>
        </Link>
        <Link to="/" className="back-to-home">
            <button className="primary-button">Back to home</button>
        </Link>
    </div>);
}

export default OrderDetailsProductItems;