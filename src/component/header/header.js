import React from "react";
import HeaderCart from "../headers-cart/headers-cart";

import "./header.css";
import logoImg from "../../assets/img/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <div className="header__img">
                    <img src={logoImg} alt="logo" />
                </div>
                <div className="header__title">
                    <h1>REACT PIZZA</h1>
                    <h3>самая вкусная пицца во вселенной</h3>
                </div>
            </div>
            <div className="header__cart">
                <HeaderCart />
            </div>
        </div>
    );
};

export default Header;
