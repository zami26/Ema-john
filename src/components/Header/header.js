import React from 'react';
import logo from '../../images/Logo.svg';
import './header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/orders">Order</a>
                <a href="/inventories">Inventories</a>
                <a href="/about">About Us</a>
            </div>
        </nav>
    );
};

export default Header; <h1>This is my Header....</h1>