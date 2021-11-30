import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu({ menuOpen, setMenuOpen }) {
    return(
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/quiz'>
                        Quiz
                    </Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/account'>
                        My Account
                    </Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/about'>
                        About Us
                    </Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/about'>
                        About Us
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