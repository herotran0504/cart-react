import Product from "./Product";
import "../../styles/productframe.css"

const ProductFrame = ({itemList, onPrevious, onNext, itemClick}) => {
    return (
        <div className="product-frame">
            <ul className="list-items">
                <li>
                    <button onClick={onPrevious}>&lt;</button>
                </li>
                {itemList.map((productItem) => (
                    <li key={productItem.productNumber}>
                        <Product productItem={productItem} itemClick={itemClick}/>
                    </li>
                ))
                }
                <li>
                    <button onClick={onNext}>&gt;</button>
                </li>
            </ul>
        </div>
    );
}
export default ProductFrame;