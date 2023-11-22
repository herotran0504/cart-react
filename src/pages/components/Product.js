import "../../styles/product.css"
import {useNavigate} from "react-router-dom";
import RatingStar from "./RatingStar";
import {addCartItem} from "../../store/actions/CartActions";
import {useDispatch} from "react-redux";
import {getAvgRating} from "../utils/ProductUltils";

const Product = ({productItem}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate("/productDetails", {state: {productNumber: productItem.productNumber}});
    }
    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch(addCartItem(productItem.productNumber));
    }
    let rating = getAvgRating(productItem);
    return (
        <div className="product-item">
            <div className="product-container" onClick={handleItemClick}>
                <div>
                    <img className="cover-large" src={productItem.productImage}
                         alt={productItem.productImage}/>
                </div>
                <div>
                    <div/>
                    <div className="name">{productItem.productName}</div>
                    <div>
                        <RatingStar rating={rating}/>
                    </div>
                    <div>${productItem.productPrice.toFixed(2)}</div>
                    {productItem.quantity ? <span style={{color: "blue"}}>In Stock</span> : <span style={{color: "red"}}>Out of Stock</span>}
                    <div>
                        <button className="primary-button" onClick={handleAddToCart} disabled={productItem.quantity === 0}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;

