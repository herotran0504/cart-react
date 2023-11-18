import "../../styles/product.css"

const Product = ({productItem, itemClick}) => {
    return (
        <div className="product-item">
            <div className="container" onClick={itemClick}>
                <div>
                    <img src={productItem.productCategory.categoryImage} alt={productItem.productCategory.categoryImage}/>
                </div>
                <div>
                    <div/>
                    <div>
                        <div>{productItem.productName}</div>
                        <div>
                            <div className="star"></div>
                        </div>
                        <div>{productItem.productPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;

