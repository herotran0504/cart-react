import Product from "./Product";
import "../../styles/productframe.css"

const ProductFrame = ({itemList, onPrevious, onNext}) => {
    // console.log(itemList);
    return (
        <div className="product-frame">
            <ul className="list-items">
                <li key="0">
                    <button onClick={onPrevious}>&lt;</button>
                </li>
                {itemList.map((productItem) => (
                    <li key={productItem.productNumber}>
                        <Product productItem={productItem}/>
                    </li>
                ))
                }
                <li key="1">
                    <button onClick={onNext}>&gt;</button>
                </li>
            </ul>
        </div>
    );
}
export default ProductFrame;