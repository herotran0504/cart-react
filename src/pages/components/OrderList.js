import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchOrders} from '../../store/actions/OrderActions';
import OrderSection from "./OrderSection";
import '../../styles/orders.css';
import OrderLineItem from "./OrderLineItem";

const OrderList = () => {
    const dispatch = useDispatch();
    //const orders = useSelector(state => state.orders);
    const orders = [{
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
    }, {
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
    }]

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div className="orders">
            <div className="orders-container">
                <h2 >Orders</h2>
                {orders.length === 0 ? (
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
                                    <OrderLineItem
                                        key={order.orderId}
                                        order={order}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderList;
