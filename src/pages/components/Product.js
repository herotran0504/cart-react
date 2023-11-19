import "../../styles/product.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Product = ({productItem}) => {
    const navigate = useNavigate();
    const handleItemClick = (e) => {
        navigate("/productDetails", { state: { item:productItem } });
    }
    const handleAddToCart = (e) => {
        alert("Add to cart coming soon :)")
    }
    return (
        <div className="product-item">
            <div className="container" onClick={handleItemClick}>
                <div>
                    <img className="image" src={productItem.productCategoryDTO.categoryImage}
                         alt={productItem.productCategoryDTO.categoryImage}/>
                </div>
                <div>
                    <div/>
                    <div>{productItem.productName}</div>
                    <div>
                        <div className="star"></div>
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

