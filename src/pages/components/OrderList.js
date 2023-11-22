import React, {useEffect, useState} from 'react';
import '../../styles/orders.css';
import OrderListItem from "./OrderListItem";
import OrderService from "../../services/OrderService";
import {useNavigate} from "react-router-dom";

const OrderList = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        OrderService.getOrders().then(data => {
            console.log("orderList::" + JSON.stringify(data));
            setOrders(data);
        });
    }, []);
    const onUpdateStatus = (orderId) => {
        navigate("/order-details", {state: {orderId: orderId}})
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
