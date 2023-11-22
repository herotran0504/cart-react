import React from 'react';
import '../../styles/orders.css';
import {Link} from "react-router-dom";
import {formatStatus, getAction} from "../utils/OrderUtils";

const OrderListItem = ({order, onUpdateStatus}) => {
    const action = getAction(order.orderStatus);
    const link = `/order-details/${order.orderId}`;
    return (
        <div className="order-item total">
            <div><Link to={link}>{order.orderId}</Link></div>
            <div>{order.items.length}</div>
            <div>{formatStatus(order.orderStatus)}</div>
            <div>{order.total.toFixed(2)}</div>
            <div>{order.shippingInfoDTO.name}</div>
            <div>{order.shippingInfoDTO.email}</div>
            <div>
                <button onClick={() => onUpdateStatus(order.orderId, order.orderStatus)}>{action}</button>
            </div>
        </div>
    );
};

export default OrderListItem;
