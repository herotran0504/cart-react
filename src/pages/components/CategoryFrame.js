import React, {useEffect, useState} from 'react';
import ProductFrame from "./ProductFrame";
import {ProductService} from "../../services/ProductService";
import {upperCaseFirstLetter} from "../utils/ProductUltils";

const NUMBER_OF_ITEM = 4;

const CategoryFrame = ({categoryName}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [index, setIndex] = useState(0);
    const [isFine, setIsFine] = useState(false);
    const [spitProducts, setSpitProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        ProductService.getProductByCategory(categoryName).then(
            data => {
                setProducts(data);
                setLoading(false);
            }
        ).catch(reason => {
            setError(true);
        })
    }, [categoryName]);


    if (products && products.length > 0) {
        if (!isFine) {
            setIsFine(true);
            if (products.length > NUMBER_OF_ITEM) {
                setSpitProducts(products.slice(0, NUMBER_OF_ITEM));
                setIndex(index + NUMBER_OF_ITEM);
            } else {
                setSpitProducts(products);
            }
        }
    }


    const handleNextCLick = () => {
        if (!isFine) {
            return;
        }
        if (index + NUMBER_OF_ITEM <= products.length) {
            setSpitProducts(products.slice(index, index + NUMBER_OF_ITEM));
            setIndex(index + NUMBER_OF_ITEM);
        } else {
            setSpitProducts(products.slice(products.length - NUMBER_OF_ITEM, products.length));
        }
    }
    const handlePreviousClick = () => {
        if (!isFine) {
            return;
        }
        if (index - NUMBER_OF_ITEM >= 0) {
            setSpitProducts(products.slice(index - NUMBER_OF_ITEM, index));
            setIndex(index - NUMBER_OF_ITEM);
        } else {
            setSpitProducts(products.slice(0, NUMBER_OF_ITEM));
            setIndex(NUMBER_OF_ITEM);
        }
    }
    return (
        <div className="category-frame">
            <div className="category-frame-container">
                <div className="title-left">
                    <h3>{upperCaseFirstLetter(categoryName)}</h3>
                </div>

                {loading && <p>Loading Product...</p>}
                {error && <p>Error: {error}</p>}
                {!isFine ? (<p>Loading Product...</p>) : (<ProductFrame itemList={spitProducts} onPrevious={handlePreviousClick} onNext={handleNextCLick}/>)}
            </div>
        </div>
    )
}
export default CategoryFrame;