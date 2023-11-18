import React from 'react';

const ProductItem = ({item, decreaseQuantity, increaseQuantity, onRemoveItem}) => {
    return (
        <div className="cart-item">
            <div>
                <img
                    className="cover-medium"
                    src={item.product.productImage}
                    alt={item.product.name}/>
            </div>
            <div>{item.product.productNumber}</div>
            <div>{item.product.productName}</div>
            <div className="cart-price">${item.product.productPrice.toFixed(2)}</div>
            <div className="quantity-container">
                <button className="cart-quantity-btn" onClick={() => decreaseQuantity(item.product.productNumber)}>-</button>
                <span><b> {item.quantity} </b></span>
                <button className="cart-quantity-btn" onClick={() => increaseQuantity(item.product.productNumber)}>+</button>
            </div>
            <div className="cart-price">${(item.product.productPrice * item.quantity).toFixed(2)}</div>
            <div className="cart-action">
                <button onClick={() => onRemoveItem(item.product.productNumber)}>Remove</button>
            </div>
        </div>
    );
};

export default ProductItem;
