import "../../styles/product.css"

const Product = ({productItem, itemClick}) => {
    // console.log(productItem);
    return (
        <div className="product-item">
            <div className="container" onClick={itemClick}>
                <div>
                    <img className="image" src={productItem.productCategoryDTO.categoryImage} alt={productItem.productCategoryDTO.categoryImage}/>
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

