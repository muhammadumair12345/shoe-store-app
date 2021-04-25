import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {

    return (
        <div className="header">
            <div className="title">
                <h1>Shoe Store</h1>
            </div>
            <div  className="nav">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/men-shoes"><li>Men</li></Link>
                    <Link to="/women-shoes"><li>Women</li></Link>
                    <Link to="/kids-shoes"><li>Kids</li></Link>
                    <Link to="/cart"><li>Cart</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
