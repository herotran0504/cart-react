import React, {memo} from "react";
import {ProductRow} from "./ProductRow";

const NUMBER_OF_ITEM = 4;
function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}
export const ProductListing = ({productList}) => {
    let splitProduct = [];
    if(productList && productList.length > 0) {
        splitProduct = chunkArray(productList, NUMBER_OF_ITEM);
    }

    return(
        <div className="product-listing">
            <div className="container">
                <div>
                    {splitProduct && splitProduct.length === 0 ? <></> : (
                        splitProduct.map(products => (
                                <ProductRow items={products}/>
                            )
                        ))}
                </div>
            </div>
        </div>
    )
}