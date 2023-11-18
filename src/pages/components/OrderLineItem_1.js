import React from 'react';
import '../../styles/orders.css';

const OrderLineItem_1 = ({item}) => (
    <div className="order-item">
        <div className="cover">
            <img
                className="cover-tiny"
                src={item.product.productImage}
                alt={item.product.name}/>
        </div>
        <div>{item.product.productNumber}</div>
        <div>{item.product.productName}</div>
        <div className="order-price">${item.product.productPrice.toFixed(2)}</div>
        <div className="order-quantity">
            <b> {item.quantity} </b>
        </div>
        <div className="order-price">${(item.product.productPrice * item.quantity).toFixed(2)}</div>
    </div>
);

export default OrderLineItem_1;
