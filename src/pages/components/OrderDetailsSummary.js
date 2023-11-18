import React from 'react';
import '../../styles/order_details.css';

const OrderDetailsSummary = ({order}) => {
    const action = "placed" === order.status ? "ship" : "deliver"
    return (
        <div className="order-details-item total">
            <div>{order.orderId}</div>
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

export default OrderDetailsSummary;
