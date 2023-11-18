import React from 'react';

const ProductItem = ({item, onQuantityChange, onRemoveItem}) => {
    return (
        <div className="cart-item">
            <div>{item.product.productNumber}</div>
            <div>{item.product.productName}</div>
            <div>${item.product.productPrice.toFixed(2)}</div>
            <div>
                <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => onQuantityChange(item.product.productNumber, parseInt(e.target.value, 10))}
                />
            </div>
            <div>${(item.product.productPrice * item.quantity).toFixed(2)}</div>
            <div>
                <button onClick={() => onRemoveItem(item.product.productNumber)}>Remove</button>
            </div>
        </div>
    );
};

export default ProductItem;
