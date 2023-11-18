import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import CartService from '../../services/CartService';
import ProductItem from './ProductItem';
import '../../styles/shopping-cart.css';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    //const cart = useSelector(state => state.cart);
    const cart = {
        cartId: "Cart_123321123", items: [
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
        ],
        total: 6300
    }
    const cartItems = cart.items;

    useEffect(() => {
        CartService.getCart()
            .then(cartData => {
                cartData.forEach(item => {
                });
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
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
        CartService.removeCartItem(productNumber)
            .then(cartData => {
            })
            .catch(error => {
                console.error('Error removing cart data:', error);
            });
    };

    return (
        <div className="shopping-cart">
            <div className="container">
                <h2>Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <div className="cart-items">
                            <div className="cart-item header">
                                <div>Image</div>
                                <div>Number</div>
                                <div>Name</div>
                                <div>Price</div>
                                <div>Quantity</div>
                                <div>Amount</div>
                                <div>Action</div>
                            </div>

                            {cartItems.map(item => (
                                <ProductItem
                                    key={item.product.productNumber}
                                    item={item}
                                    onQuantityChange={handleQuantityChange}
                                    onRemoveItem={handleRemoveItem}
                                />
                            ))}

                            <div className="cart-item total">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div><h3>Total:</h3></div>
                                <div><h3>${cart.total}</h3></div>
                            </div>
                        </div>

                        <div className="checkout-actions">
                            <button onClick={() => alert('coming soon :)')}>Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
