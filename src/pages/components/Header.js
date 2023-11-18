import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">E-Commerce</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Categories</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/carts">Cart</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">Profile</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
