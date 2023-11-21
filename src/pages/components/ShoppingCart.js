import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CartService from '../../services/CartService';
import {fetchCart, removeCartItem} from "../../store/actions/CartActions";
import '../../styles/shopping_cart.css';
import CartLineItem from "./CartLineItem";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const {cart, loading, error} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    const handleQuantityChange = (productNumber, newQuantity) => {
        CartService.updateCartItem(productNumber, newQuantity)
            .then(cartData => {
            })
            .catch(error => {
                console.error('Error changing cart data:', error);
            });
    };

    const handleRemoveItem = (productNumber) => {
        dispatch(removeCartItem(productNumber));
    };

    return (
        <div className="shopping-cart">
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                {loading && <p>Loading cart...</p>}
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
                                    increaseQuantity={handleQuantityChange}
                                    decreaseQuantity={handleQuantityChange}
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
                            <button className="cart-checkout" onClick={() => alert('coming soon :)')}>Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
