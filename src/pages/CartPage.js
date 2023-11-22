import React from 'react';
import ShoppingCart from "./components/ShoppingCart";
import {PageContainer} from "./components/PageContainer";

export const CartPage = () => <PageContainer title={'Shopping Cart'} component={<ShoppingCart/>}/>