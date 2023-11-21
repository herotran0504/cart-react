import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryFrame from "./components/CategoryFrame";
import {useParams} from "react-router-dom";

export const ProductLCategoryPage = () => {
    let params = useParams();
    return (
        <div>
            <Header/>
            <CategoryFrame categoryName={params.categoryName}/>
            <Footer/>
        </div>
    )
}