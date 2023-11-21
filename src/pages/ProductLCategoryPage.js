import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryFrame from "./components/CategoryFrame";

export const ProductLCategoryPage = () => {
    return (
        <div>
            <Header/>
            <CategoryFrame categoryName={"books"}/>
            {/*<CategoryFrame categoryName={"clothing"}/>*/}
            {/*<CategoryFrame categoryName={"electronic"}/>*/}
            {/*<CategoryFrame categoryName={"home"}/>*/}
            {/*<CategoryFrame categoryName={"sports"}/>*/}
            <Footer/>
        </div>
    )
}