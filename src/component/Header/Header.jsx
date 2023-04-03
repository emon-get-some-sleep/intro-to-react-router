import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           <ActiveLink to="/friends">Friends</ActiveLink>
           <Link to="/post">Post</Link>
        </nav>
    );
};

export default Header;