import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h3>Hello! Shan. . . This is from Header.</h3>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a>
                <a href="/"></a> */
                }
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
            </nav>
        </div>
    );
};

export default Header;