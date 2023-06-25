import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import './Navbar.css';

const Navbar = () => (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src="/CRAFTER_logo-fonts.png" alt="app logo">
        </div>
        <ul className="app_navbar-links">
            <li className="p__opensans"><a href="#katalog" className="nav__link" id="nav__link">КОНТАКТЫ</a></li>
            <li className="p__opensans"><a href="#" className="nav__link" id="nav__link">О НАС</a></li>
            <li className="p__opensans"><a href="#beer_cran" className="nav__link" id="nav__link">CEЙЧАС</a></li>
        </ul>
        <div className="app__navbar-login">
            <a href="" className="P__opensans">ВХОД / РЕГИСТРАЦИЯ</a>
            <div></div>
            <a href="" className="P__opensans">ВЫБРАТЬ СТОЛИК</a>
        </div>
        <div className="app__navbar--smallscreen">
            <GigamburgerMenu style="font-size: 27px"></GigamburgerMenu>
            <div className="app__navbar--smallscreen_overlay flex_center slide-bottom">
                <ul className="app_navbar-smallscreen-links">
                    <li className="p__opensans"><a href="#katalog" className="nav__link" id="nav__link">КОНТАКТЫ</a>
                    </li>
                    <li className="p__opensans"><a href="#" className="nav__link" id="nav__link">О НАС</a></li>
                    <li className="p__opensans"><a href="#beer_cran" className="nav__link" id="nav__link">CEЙЧАС</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
