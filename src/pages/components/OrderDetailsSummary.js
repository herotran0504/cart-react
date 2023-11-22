import React from 'react';
import '../../styles/order_details.css';
import {formatStatus, getAction} from "../utils/OrderUtils";

const OrderDetailsSummary = ({order, onUpdateStatus}) =>
    <div className="order-details-item total">
        <div>{order.orderId}</div>
        <div>{formatStatus(order.orderStatus)}</div>
        <div>{order.total.toFixed(2)}</div>
        <div>{order.shippingInfoDTO.name}</div>
        <div>{order.shippingInfoDTO.email}</div>
        <div>
            <button onClick={() => onUpdateStatus()}>{getAction(order.orderStatus)}</button>
        </div>
    </div>;

export default OrderDetailsSummary;
