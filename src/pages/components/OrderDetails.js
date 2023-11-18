import React from 'react';
import OrderDetailsProductItems from "./OrderDetailsProductItems";
import OrderDetailsSummary from "./OrderDetailsSummary";
import '../../styles/order_details.css';

const OrderDetails = () => {
    const order = {
        orderId: 'Order_1234567890',
        status: 'Placed',
        createdTime: '12-12-2022',
        total: 1234.56,
        shippingInfo: {name: 'Nobody', email: 'nobody@gmail.com'},
        items: [
            {
                product: {
                    productNumber: "ABX12232131313",
                    productName: "Apple iPad Pro 2",
                    productPrice: 1260.03,
                    productImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559236_sd.jpg'
                }, quantity: 1
            },
            {
                product: {
                    productNumber: "ABX12232131313",
                    productName: "Apple iPhone 15 ProMax",
                    productPrice: 1260.03,
                    productImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6539/6539915_sd.jpg'
                }, quantity: 2
            },
            {
                product: {
                    productNumber: "ABX12232131313",
                    productName: "Apple iPhone 15 Pro",
                    productPrice: 1260.03,
                    productImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6543/6543740cv17d.jpg'
                }, quantity: 2
            }
        ]
    }

    return (
        <div className="orders-details">
            <div className="order-details-container">
                <div className="order-details-card">
                    <h2>Order Summary</h2>
                    <div className="order-items">
                        <div className="order-item header">
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
                            <OrderDetailsProductItems
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
        </div>
    );
};

export default OrderDetails;
