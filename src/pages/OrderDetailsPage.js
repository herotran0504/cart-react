import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderDetails from "./components/OrderDetails";

export const OrderDetailsPage = () => {
    return (
        <div>
            <Header/>
            <OrderDetails/>
            <Footer/>
        </div>
    )
}