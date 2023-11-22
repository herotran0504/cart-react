import React, {useEffect, useState} from 'react';
import '../../styles/orders.css';
import OrderListItem from "./OrderListItem";
import OrderService from "../../services/OrderService";
import {isDelivered} from "../utils/OrderUtils";

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    function fetchOrders() {
        OrderService.getOrders()
            .then(data => setOrders(data))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        fetchOrders()
    }, []);

    const onUpdateStatus = (orderId, orderStatus) => {
        if (!isDelivered(orderStatus)) {
            OrderService.updateOrderStatus(orderId)
                .then(() => fetchOrders())
                .catch(e => console.log(e));
        }
    }
    return (
        <>
            {!orders || orders.length === 0 ? (
                <p>You have no order currently</p>
            ) : (
                <div className="order-items">
                    <div className="order-item header">
                        <div>Order Id</div>
                        <div>Items</div>
                        <div>Status</div>
                        <div>Total</div>
                        <div>Customer</div>
                        <div>Email</div>
                        <div>Action</div>
                    </div>
                    <div>
                        <div>
                            {orders.map(order => (
                                <OrderListItem
                                    key={order.orderId}
                                    order={order}
                                    onUpdateStatus={onUpdateStatus}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderList;
