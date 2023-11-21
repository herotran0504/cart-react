import React, {useEffect} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryFrame from "./components/CategoryFrame";
import {fetchCart} from "../store/actions/CartActions";
import {useDispatch} from "react-redux";

export const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

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