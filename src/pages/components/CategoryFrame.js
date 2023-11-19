import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductFrame from "./ProductFrame";
import {ProductService} from "../../services/ProductService";
import {fetchProductByCategory} from "../../store/actions/ProductActions";

const NUMBER_OF_ITEM = 4;

const CategoryFrame = ({categoryName}) => {
    const product = useSelector((state) => state.products);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const [index, setIndex] = useState(0);
    const [isFine, setIsFine] = useState(false);
    const [productList, setProductList] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductByCategory(categoryName));
    }, [dispatch]);

    if(product && product.products.length > 0) {
        if(!isFine) {
            console.log(product.products);
            setIsFine(true);
            if (product.products.length > NUMBER_OF_ITEM) {
                setProductList(product.products.slice(0, NUMBER_OF_ITEM));
                setIndex(index + NUMBER_OF_ITEM);
            } else {
                setProductList(product.products);
            }
        }
    }


    const handleNextCLick = () => {
        if (index + NUMBER_OF_ITEM <= product.products.length) {
            setProductList(product.products.slice(index, index + NUMBER_OF_ITEM));
            setIndex(index + NUMBER_OF_ITEM);
        } else {
            setProductList(product.products.slice(product.products.length - NUMBER_OF_ITEM, product.products.length));
        }
    }
    const handlePreviousClick = () => {
        if (index - NUMBER_OF_ITEM >= 0) {
            setProductList(product.products.slice(index - NUMBER_OF_ITEM, index));
            setIndex(index - NUMBER_OF_ITEM);
        } else {
            setProductList(product.products.slice(0, NUMBER_OF_ITEM));
            setIndex(NUMBER_OF_ITEM);
        }
    }
    return (
        <div className="category-frame">

            <div className="category-frame-container">
                <h3>{categoryName}</h3>
                {loading && <p>Loading Product...</p>}
                {error && <p>Error: {error}</p>}
                {!isFine ? (<p>Loading Product...</p>) :(<ProductFrame itemList={productList} onPrevious={handlePreviousClick} onNext={handleNextCLick}/>)}
            </div>
        </div>
    )
}
export default CategoryFrame;