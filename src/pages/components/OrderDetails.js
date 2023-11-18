import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOrderDetails} from '../../store/actions/OrderActions';

const OrderDetails = () => {
    const {orderId} = useParams();
    const dispatch = useDispatch();
    const orderDetails = useSelector(state => state.orderDetails);

    useEffect(() => {
        dispatch(fetchOrderDetails(orderId));
    }, [dispatch, orderId]);

    return (
        <div>
            <h2>Order Details</h2>
            {orderDetails ? (
                <div>
                    <div>Order ID: {orderDetails.orderId}</div>
                    <div>Status: {orderDetails.status}</div>
                </div>
            ) : (<p>Loading order details...</p>)
            }
        </div>
    );
};

export default OrderDetails;
