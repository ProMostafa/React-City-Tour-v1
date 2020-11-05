import React ,{ Component } from 'react';
import './Navbar.scss'
import logo from '../../Logo/logo2.png';
function Navbar(){
    return (
        <div>
            <nav className="navbar">
                <img className="logo" src={logo} alt="city tour logo" />
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">
                            about
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link active">
                            tours
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
