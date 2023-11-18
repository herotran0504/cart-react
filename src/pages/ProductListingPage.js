import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProductFrame from "./components/ProductFrame";
import CategoryFrame from "./components/CategoryFrame";

export const ProductListingPage = () => {
    return (
        <div>
            <Header/>
            <CategoryFrame/>
            <CategoryFrame/>
            <Footer/>
        </div>
    )
}