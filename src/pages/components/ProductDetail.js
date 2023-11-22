import RatingStar from "./RatingStar";
import {getAvgRating} from "../utils/ProductUltils";
import "../../styles/productdetail.css"

const ProductDetail = ({productItem, onAddToCart}) => {

    let rating = getAvgRating(productItem);

    return (
        <div className="product-detail">
            <div className="product-detail-container">
                <ul className="list-detail-horizon">
                    <li key="0">
                        <img className="cover-large" src={productItem.productImage}
                             alt={productItem.productImage}/>
                    </li>
                    <li key="1">
                        <ul className="list-detail-vertical">
                            <li key="10">
                                <h3>{productItem.productName}</h3>
                            </li>
                            <li key="11">
                                Price: {productItem.productPrice}
                            </li>
                            <li key="12">
                                Category: {productItem.productCategoryDTO.categoryName}
                            </li>
                            <li key="13">
                                <RatingStar rating={rating}/>
                            </li>
                            <li key="14">
                                {productItem.productDescription}
                            </li>
                            <li key="15">
                                In stock: {productItem.quantity}
                            </li>
                            <li key="16">
                                <button className="primary-button" onClick={onAddToCart} disabled={productItem.quantity <= 0} >Add to Cart</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default ProductDetail;