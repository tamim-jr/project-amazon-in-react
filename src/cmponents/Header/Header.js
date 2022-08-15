import React from "react";
import logo from '../../images/amazon.png';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;