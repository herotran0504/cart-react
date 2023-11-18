import React from 'react';
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";

export const CartPage = () => {
    return (
        <div>
            <Header/>
            <ShoppingCart/>
            <Footer/>
        </div>
    )
}