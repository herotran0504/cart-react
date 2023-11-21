import React from 'react';

const CartLineItem = ({item, decreaseQuantity, increaseQuantity, onRemoveItem}) => {
    const product = item.product;
    const productNumber = product.productNumber;
    return (
        <div className="cart-item">
            <div>
                <img
                    className="cover-small"
                    src={product.productImage}
                    alt={product.name}/>
            </div>
            <div className="cart-name">{product.productName}</div>
            <div className="cart-price">${product.productPrice.toFixed(2)}</div>
            <div className="cart-quantity-container">
                <button className="cart-quantity-btn" onClick={() => decreaseQuantity(productNumber)}>-</button>
                <span className="cart-items-quantity"><b>{item.quantity}</b></span>
                <button className="cart-quantity-btn" onClick={() => increaseQuantity(productNumber)}>+</button>
            </div>
            <div className="cart-price">${(product.productPrice * item.quantity).toFixed(2)}</div>
            <div className="cart-action">
                <button onClick={() => onRemoveItem(productNumber)}>Remove</button>
            </div>
        </div>
    );
};

export default CartLineItem;
