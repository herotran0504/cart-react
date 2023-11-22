import React from 'react';
import '../../styles/order_details.css';

const OrderDetailsProductItems = ({item}) => (
    <div className="order-details-item">
        <div className="order-details-cover">
            <img
                className="cover-small"
                src={item.product.productImage}
                alt={item.product.name}/>
        </div>
        <div>{item.product.productNumber}</div>
        <div className="order-details-name name">{item.product.productName}</div>
        <div className="order-details-price">${item.product.productPrice.toFixed(2)}</div>
        <div className="order-details-quantity">
            <b> {item.quantity} </b>
        </div>
        <div className="order-details-price">${(item.product.productPrice * item.quantity).toFixed(2)}</div>
    </div>
);

export default OrderDetailsProductItems;
