import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decreaseItemQuantity, fetchCart, increaseItemQuantity, removeCartItem} from "../../store/actions/CartActions";
import CartLineItem from "./CartLineItem";
import '../../styles/shopping_cart.css';
import {useNavigate} from "react-router-dom";

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
        navigate("/personal-information");
    }

    return (
        <div className="shopping-cart">
            <div className="cart-container">
                <h2>Shopping Cart</h2>
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

                        <div className="cart-checkout-actions">
                            <button className="cart-checkout" onClick={handleCheckoutCart}>Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
