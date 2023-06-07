import React from "react";
import logo from "../images/troll-face.png";
import '../main.css';
const Header = () =>{
    return (
        <nav className="navbar-header">
            <div className="nav-section-1">
                <img src={logo} width="40px" className="nav-logo"/>
                <h2 className="header-title">Meme Generator</h2>
            </div>
            <div className="nav-section-2">
                <h5 className="header-project">React course - Project 3</h5>
            </div>
        </nav>
    );
};

export default Header;