import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Header.css';
import {useSelector} from "react-redux";

const Header = () => {
    const {cart} = useSelector(state => state.cart);

    const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
    const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

    const countCartItems = () => {
        if (cart && cart.items && cart.items.length > 0) {
            return cart.items.map(i => i.quantity).reduce((i1, i2) => i1 + i2);
        }
        return 0;
    }
    const toggleProductsMenu = () => {
        setIsProductsMenuOpen(!isProductsMenuOpen);
        setIsCategoriesMenuOpen(false);
    };

    const toggleCategoriesMenu = () => {
        setIsCategoriesMenuOpen(!isCategoriesMenuOpen);
        setIsProductsMenuOpen(false);
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
                        <div className="toggle-menu" onClick={toggleProductsMenu}>
                            <span className="toggle-menu-header" style={{cursor: 'pointer'}}>Admin</span>
                            {isProductsMenuOpen && (
                                <ul className="submenu">
                                    <Link to="/addProduct">Add product</Link>
                                    <Link to="/editProduct">Edit product</Link>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li>
                        <div className="toggle-menu" onClick={toggleCategoriesMenu}>
                            <span className="toggle-menu-header" style={{cursor: 'pointer'}}>Categories</span>
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
                    <li><Link to="/carts">Cart {countCartItems() > 0 ?
                        <span className="cart-counter">{countCartItems()}</span> : ''}</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
