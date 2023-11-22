import React from 'react';
import {PageContainer} from "./components/PageContainer";
import {OrderConfirmation} from "./components/OrderConfirmation";
import '../styles/order_confirmation.css'

export const OrderConfirmationPage = () => <PageContainer title={'Your order was successful'} component={<OrderConfirmation/>}/>