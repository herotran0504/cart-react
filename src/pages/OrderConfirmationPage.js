import React from 'react';
import '../styles/order_confirmation.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Link} from "react-router-dom";

export const OrderConfirmationPage = () => {
    const orderId = "11234556423146230";
    return (
        <div>
            <Header/>
            <main className="confirmation-container">
                <img className="image-wrapper" alt=""/>
                <h2 className="title">Your order was successful</h2>
                <p className="description">Thanks for your purchase!</p>
                <div className="order-number">
                    <span className="order-number-label">Your order number is #</span>
                    <span className="order-number-value">{orderId}</span>
                </div>
                <p className="order-details">You’ll receive an email confirming your order details</p>
                <Link to="/orders" className="track-order">Track your order</Link>
                <Link to="/" className="back-to-home">Back to home</Link>
            </main>
            <Footer/>
        </div>
    );
}
