import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const PageContainer = ({title, component}) => {
    function pageContent() {
        return <div className="page-container">
            <div className="page-content">
                <div className="page-card">
                    <h1>{title}</h1>
                    {component}
                </div>
            </div>
        </div>;
    }

    return (
        <>
            <Header/>
            {pageContent()}
            <Footer/>
        </>
    )
}