import "../../styles/product.css"
import {useNavigate} from "react-router-dom";
import RatingStar from "./RatingStar";
import {addCartItem} from "../../store/actions/CartActions";
import {useDispatch} from "react-redux";
import {getAvgRating} from "../utils/ProductUltils";

const Product = ({productItem}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleItemClick = (e) => {
        navigate("/productDetails", {state: {productNumber: productItem.productNumber}});
    }
    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch(addCartItem(productItem.productNumber));
    }
  let rating = getAvgRating(productItem);
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

