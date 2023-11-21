import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Header.css';
import {useSelector} from "react-redux";

const Header = () => {
    const {cart} = useSelector(state => state.cart);
    const cartItems = cart.items;
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">E-Commerce</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Categories</Link></li>
                    <li>
                        <div onClick={toggleSubMenu}>
                            <span className="header-menu" style={{cursor: 'pointer'}}>Products</span>
                            {isSubMenuOpen && (
                                <ul className="submenu">
                                    <Link to="/addProduct">Add product</Link>
                                    <Link to="/deleteProduct">Delete product</Link>
                                    <Link to="/updateProduct">Update product</Link>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li><Link to="/carts">Cart {cartItems && cartItems.length > 0 ? <span className="cart-counter">{cartItems.length}</span> : ''}</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">Profile</Link></li>
                    <li><Link to="/search">Search...</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
