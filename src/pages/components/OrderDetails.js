import React, {useEffect, useState} from 'react';
import OrderDetailsProductItems from "./OrderDetailsProductItems";
import OrderDetailsSummary from "./OrderDetailsSummary";
import '../../styles/order_details.css';
import {useParams} from "react-router-dom";
import OrderService from "../../services/OrderService";
import {isDelivered} from "../utils/OrderUtils";

const OrderDetails = () => {

    const {orderId} = useParams();
    const emptyOrder = {orderId: "", orderStatus: "", items: [], shippingInfoDTO: {name: "", email: ""}, total: 0.0}
    const [order, setOrder] = useState(emptyOrder);

    function fetchOrderDetails() {
        OrderService.getOrder(orderId)
            .then(data => setOrder(data))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    const onUpdateStatus = () => {
        if (!isDelivered(order.orderStatus)) {
            OrderService.updateOrderStatus(order.orderId)
                .then(() => fetchOrderDetails())
                .catch(e => alert(e));
        }
    }
    return (
        <div>
            {!order ? (<div/>) : (
                <div>
                    <div className="order-details-items">
                        <div className="order-details-item header">
                            <div>Order Id</div>
                            <div>Status</div>
                            <div>Total</div>
                            <div>Customer</div>
                            <div>Email</div>
                            <div>Action</div>
                        </div>
                        <div>
                            <OrderDetailsSummary order={order} onUpdateStatus={onUpdateStatus}/>
                        </div>
                    </div>
                    <div className="order-details-items">
                        <div className="order-details-item header">
                            <div>Image</div>
                            <div>Number</div>
                            <div>Name</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Amount</div>
                        </div>
                        {order.items.map(item => (
                            <OrderDetailsProductItems
                                key={item.product.productNumber}
                                item={item}
                            />
                        ))}

                        <div className="order-details-item total">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div><h3>Total:</h3></div>
                            <div><h3>${order.total.toFixed(2)}</h3></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderDetails;
