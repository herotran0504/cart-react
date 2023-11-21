import "../../styles/product.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import RatingStar from "./RatingStar";

const Product = ({productItem}) => {
    const navigate = useNavigate();
    const handleItemClick = (e) => {
        navigate("/productDetails", { state: { productNumber:productItem.productNumber } });
    }
    const handleAddToCart = (e) => {
        alert("Add to cart coming soon :)")
    }
    const ratingAvg = () => {
        const numOfRating = productItem.reviewDTOList.length;
        const totalRating =  productItem.reviewDTOList.reduce((acc, curValue) => {return acc + curValue.rating}, 0);
        return (Math.floor(totalRating / numOfRating + 0.5));
    }
    let rating = ratingAvg();
    if(!rating) {
        rating = 0;
    }
    return (
        <div className="product-item">
            <div className="container" onClick={handleItemClick}>
                <div>
                    <img className="image" src={productItem.productImage}
                         alt={productItem.productImage}/>
                </div>
                <div>
                    <div/>
                    <div>{productItem.productName}</div>
                    <div>
                        <RatingStar rating={rating}/>
                    </div>
                    <div>{productItem.productPrice}</div>
                    <div>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;

