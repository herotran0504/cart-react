import React from 'react';
import '../../styles/orders.css';
import {Link} from "react-router-dom";

const OrderListItem = ({order, onUpdateStatus}) => {
    const action = "placed" === order.status ? "ship" : "deliver"
    const link = `/order-details/${order.orderId}`;
    return (
        <div className="order-item total">
            <div><Link to={link}>{order.orderId}</Link></div>
            <div>{order.items.length}</div>
            <div>{order.orderStatus}</div>
            <div>{order.total}</div>
            <div>{order.shippingInfoDTO.name}</div>
            <div>{order.shippingInfoDTO.email}</div>
            <div>
                <button onClick={() => onUpdateStatus(order.orderId)}>{action}</button>
            </div>
        </div>
    );
};

export default OrderListItem;
