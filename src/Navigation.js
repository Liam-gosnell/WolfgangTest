import React from 'react';
import './Navigation.css';
import logo from './wolfgang_logo.svg';

function Header() {
    return (
        <div className="navigation">
            <div className="nav__left">
                <img src={logo} alt="" />
            </div>
            
            <div className="nav__right">
                <li>OUR WORK</li>
                <li>ABOUT US</li>
                <li>CAREERS</li>
                <li>BLOG</li>
                <li>AWARDS</li>
                <li>CONTACT</li>
            </div>

        </div>
    )
}

export default Header
