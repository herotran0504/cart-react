import Product from "./Product";

export const ProductRow = ({items, index}) => {
    return (
        <div className="row">
            <ul className="list-items-horizon">
                {items.map((productItem) => (
                    <li key={productItem.productNumber}>
                        <Product productItem={productItem}/>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}