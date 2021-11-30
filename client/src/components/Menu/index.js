import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu({ menuOpen, setMenuOpen }) {
    function showAccount() {
        if (Auth.loggedIn()) {
            return (
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/account'>
                        My Account
                    </Link>
                </li>
            );
        } else {
            return (
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
            );
        }
    }
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/quiz'>
                        Quiz
                    </Link>
                </li>
                {showAccount()}
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/about'>
                        About Us
                    </Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/blog'>
                        Beer Blog
                    </Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/contact'>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;