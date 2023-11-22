import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Header.css';
import {useSelector} from "react-redux";

const Header = ({onPageChange}) => {
    const {cart} = useSelector(state => state.cart);
    const cartItems = cart.items;
    const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
    const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

    const toggleProductsMenu = () => {
        setIsProductsMenuOpen(!isProductsMenuOpen);
    };

    const toggleCategoriesMenu = () => {
        setIsCategoriesMenuOpen(!isCategoriesMenuOpen)
    }
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">E-Commerce</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <div onClick={toggleCategoriesMenu}>
                            <span className="header-menu" style={{cursor: 'pointer'}}>Categories</span>
                            {isCategoriesMenuOpen && (
                                <ul className="submenu">
                                    <Link to="/categories/books">Books</Link>
                                    <Link to="/categories/clothing">Clothing</Link>
                                    <Link to="/categories/electronic">Electronic</Link>
                                    <Link to="/categories/home">Home</Link>
                                    <Link to="/categories/sports">Sports</Link>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li><Link to="/search">Search</Link></li>
                    <li>
                        <div onClick={toggleProductsMenu}>
                            <span className="header-menu" style={{cursor: 'pointer'}}>Products</span>
                            {isProductsMenuOpen && (
                                <ul className="submenu">
                                    <Link to="/addProduct">Add product</Link>
                                    <Link to="/editProduct">Edit product</Link>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li><Link to="/carts">Cart {cartItems && cartItems.length > 0 ?
                        <span className="cart-counter">{cartItems.length}</span> : ''}</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
