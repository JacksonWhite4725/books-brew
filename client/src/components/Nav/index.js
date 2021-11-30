import React from 'react';
//import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav({ menuOpen, setMenuOpen }) {
    return (
        <div className={'header ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <Link to='/' className='logo'>
                        Books and Brew
                    </Link>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
