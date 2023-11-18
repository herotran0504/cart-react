import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderList from "./components/OrderList";

export const OrderListingPage = () => (
    <div>
        <Header/>
        <OrderList/>
        <Footer/>
    </div>
)