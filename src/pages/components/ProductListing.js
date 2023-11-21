import React from "react";
import {ProductRow} from "./ProductRow";
import {chunkArray} from "../utils/ProductUltils";

const NUMBER_OF_ITEM = 5;
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