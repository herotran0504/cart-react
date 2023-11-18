import React from 'react';
import '../styles/order_confirmation.css'

export const OrderConfirmationPage = () => {
    const orderId = "11234556423146230";
    return (
        <>
            <main className="main-container">
                <img className="image-wrapper" alt=""/>
                <h2 className="title">Your order was successful</h2>
                <p className="description">Thanks for your purchase!</p>
                <div className="order-number">
                    <span className="order-number-label">Your order number is #</span>
                    <span className="order-number-value">{orderId}</span>
                </div>
                <p className="order-details">You’ll receive an email confirming your order details</p>
                <a href="#" className="track-order">Track your order</a>
                <a href="#" className="back-to-home">Back to home</a>
            </main>
        </>
    );
}
