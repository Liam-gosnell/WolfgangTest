import React from 'react';
import Navigation from "./Navigation";
import './Header.css'

function Header() {
    return (
        <div className="header">
            <Navigation />
            <div className="banner__content">
                <h1>The Awards Wall</h1>
            </div>
        </div>
    )
}

export default Header
