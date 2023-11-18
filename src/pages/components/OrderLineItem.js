import React from 'react';
import '../../styles/orders.css';
import {Link} from "react-router-dom";

const OrderLineItem = ({order}) => {
    const action = "placed" === order.status ? "ship" : "deliver"
    return (
        <div className="order-item total">
            <div><Link to="/order-details">{order.orderId}</Link></div>
            <div>{order.items.length}</div>
            <div>{order.status}</div>
            <div>{order.total}</div>
            <div>{order.shippingInfo.name}</div>
            <div>{order.shippingInfo.email}</div>
            <div>
                <button onClick={() => alert('coming soon')}>{action}</button>
            </div>
        </div>
    );
};

export default OrderLineItem;
