import React from 'react';
import OrderDetails from "./components/OrderDetails";
import {PageContainer} from "./components/PageContainer";

export const OrderDetailsPage = () => <PageContainer title={'Order Summary'} component={<OrderDetails/>}/>