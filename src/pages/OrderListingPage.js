import React from 'react';
import OrderList from "./components/OrderList";
import {PageContainer} from "./components/PageContainer";

export const OrderListingPage = () => <PageContainer title={'Orders List'} component={<OrderList/>}/>