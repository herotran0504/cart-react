import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductFrame from "./ProductFrame";
import {fetchProductByCategory} from "../../store/actions/ProductActions";

const NUMBER_OF_ITEM = 4;

const CategoryFrame = ({categoryName}) => {
    const {products, loading, error} = useSelector(state => state.products);
    const [index, setIndex] = useState(0);
    const [isFine, setIsFine] = useState(false);
    const [productList, setProductList] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductByCategory(categoryName));
    }, [categoryName]);

    if(products && products.length > 0) {
        if(!isFine) {
            setIsFine(true);
            if (products.length > NUMBER_OF_ITEM) {
                setProductList(products.slice(0, NUMBER_OF_ITEM));
                setIndex(index + NUMBER_OF_ITEM);
            } else {
                setProductList(products);
            }
        }
    }


    const handleNextCLick = () => {
        if(!isFine) {
            return;
        }
        if (index + NUMBER_OF_ITEM <= products.products.length) {
            setProductList(products.slice(index, index + NUMBER_OF_ITEM));
            setIndex(index + NUMBER_OF_ITEM);
        } else {
            setProductList(products.slice(products.length - NUMBER_OF_ITEM, products.length));
        }
    }
    const handlePreviousClick = () => {
        if(!isFine) {
            return;
        }
        if (index - NUMBER_OF_ITEM >= 0) {
            setProductList(products.slice(index - NUMBER_OF_ITEM, index));
            setIndex(index - NUMBER_OF_ITEM);
        } else {
            setProductList(products.slice(0, NUMBER_OF_ITEM));
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