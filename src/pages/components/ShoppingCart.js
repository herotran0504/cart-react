import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decreaseItemQuantity, fetchCart, increaseItemQuantity, removeCartItem} from "../../store/actions/CartActions";
import CartLineItem from "./CartLineItem";
import {useNavigate} from "react-router-dom";
import '../../styles/shopping_cart.css';

const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart, error} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    const handleRemoveItem = (productNumber) => {
        dispatch(removeCartItem(productNumber));
    };

    const handleIncreaseQuantity = (productNumber) => {
        dispatch(increaseItemQuantity(cart.cartId, productNumber));
    };

    const handleDecreaseQuantity = (productNumber) => {
        dispatch(decreaseItemQuantity(cart.cartId, productNumber));
    };

    const handleCheckoutCart = () => {
        navigate("/personal-information", {state: {cartId: cart.cartId}});
    }

    return (
        <>
            {error && <p>Error: {error}</p>}
            {!cart || !cart.items || cart.items.length === 0 ? (<p>Your cart is empty.</p>) : (
                <div>
                    <div className="cart-items">
                        <div className="cart-item header">
                            <div>Image</div>
                            <div>Name</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Amount</div>
                            <div>Action</div>
                        </div>

                        {cart.items.map(item => (
                            <CartLineItem
                                key={item.product.productNumber}
                                item={item}
                                increaseQuantity={handleIncreaseQuantity}
                                decreaseQuantity={handleDecreaseQuantity}
                                onRemoveItem={handleRemoveItem}
                            />
                        ))}

                        <div className="cart-item total">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div><h3>Total:</h3></div>
                            <div><h3>${cart.total.toFixed(2)}</h3></div>
                        </div>
                    </div>

                    <div className="primary-actions">
                        <div className="primary-content"/>
                        <button className="primary-button" onClick={handleCheckoutCart}>Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
