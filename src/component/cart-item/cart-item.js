import React from "react";

import "./cart-item.css";

import pizzaImg from '../../assets/img/pizza/1.png'

const CartItem = () => {
    return (
        <li>
            <div className="cart-item__divider" />

            <div className="cart-item">
                <div className="cart-item__order">
                    <div className="cart-item__img">
                        <img src={pizzaImg} alt="pizza-img" />
                    </div>

                    <div className="cart-item__pizza">
                        <div className="cart-item__name">Сырный цыпленок</div>
                        <div className="cart-item__options">тонкое тесто, 26 см.</div>
                    </div>
                </div>

                <div className="cart-item__control">
                    <div className="cart-item__quantity">
                        <button className="cart-item__btn">
                            <div className="minus" />
                        </button>
                        <span className="cart-item__counter">2</span>
                        <button className="cart-item__btn">
                            <div>+</div>
                        </button>
                    </div>

                    <div className="cart-item__price">770 р</div>

                    <button className="cart-item__btn del">
                        <div>+</div>
                    </button>
                </div>
                
            </div>
        </li>
    );
};

export default CartItem;
