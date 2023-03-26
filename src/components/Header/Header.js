import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2>This is header component</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;