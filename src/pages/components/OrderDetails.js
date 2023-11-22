import React, {useEffect, useState} from 'react';
import OrderDetailsProductItems from "./OrderDetailsProductItems";
import OrderDetailsSummary from "./OrderDetailsSummary";
import '../../styles/order_details.css';
import {useParams} from "react-router-dom";
import OrderService from "../../services/OrderService";

const OrderDetails = () => {
    const {orderId} = useParams();
    const emptyOrder = {orderId: "", items: [], shippingInfoDTO: {name: "", email: ""}, total: 0.0}
    const [order, setOrder] = useState(emptyOrder);
    useEffect(() => {
        OrderService.getOrder(orderId).then(data => {
            console.log("order::" + JSON.stringify(data));
            setOrder(data);
        });
    });
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
                            <div>
                                <OrderDetailsSummary order={order}/>
                            </div>
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
                            <div><h3>${order.total}</h3></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderDetails;
