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
            <CategoryFrame categoryName={"books"}/>
            <CategoryFrame categoryName={"clothing"}/>
            <CategoryFrame categoryName={"electronic"}/>
            <CategoryFrame categoryName={"home"}/>
            <CategoryFrame categoryName={"sports"}/>
            <Footer/>
        </div>
    )
}