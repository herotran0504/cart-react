import React from 'react';
import OrderLineItem from "./OrderLineItem";
import '../../styles/orders.css';

const OrderSection = ({order}) => (
    <div className="cart-section-container">
        <div className="cart-section-card">
            <h3 onClick={() => alert('view details')}>{order.orderId}</h3>
            <div className="order-items">
                <div className="order-item header">
                    <div>Image</div>
                    <div>Number</div>
                    <div>Name</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Amount</div>
                </div>
                {order.items.map(item => (
                    <OrderLineItem
                        key={item.product.productNumber}
                        item={item}
                    />
                ))}

                <div className="order-item total">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div><h3>Total:</h3></div>
                    <div><h3>${order.total}</h3></div>
                </div>
            </div>
        </div>
    </div>
)


export default OrderSection;
