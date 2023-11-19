import RatingStar from "./RatingStar";

const ProductDetail = ({productItem, onAddToCart}) => {
    const ratingAvg = () => {
        const numOfRating = productItem.reviewDTOList.length;
        const totalRating =  productItem.reviewDTOList.reduce((acc, curValue) => {return acc + curValue.rating}, 0);
        return Math.floor(totalRating / numOfRating + 0.5);
    }
    let rating = ratingAvg();
    if(!rating) {
        rating = 0;
    }

    return (
        <div className="product-detail">
            <div className="container">
                <ul className="list-detail-horizon">
                    <li key="0">
                        <img className="image" src={productItem.productImage}
                             alt={productItem.productImage}/>
                    </li>
                    <li key="1">
                        <ul className="list-detail-vertical">
                            <li key="10">
                                <h3>{productItem.productName}</h3>
                            </li>
                            <li key="11">
                                {productItem.productPrice}
                            </li>
                            <li key="12">
                                {productItem.productCategory}
                            </li>
                            <li key="13">
                                <RatingStar rating={rating}/>
                            </li>
                            <li key="14">
                                {productItem.productDescription}
                            </li>
                            <li key="15">
                                <button onClick={onAddToCart}>Add to Cart</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default ProductDetail;