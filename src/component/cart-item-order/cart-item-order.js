import React from "react";

import "./cart-item-order.css";

import pizzaImg from "../../assets/img/pizza/1.png";


const CartItemOrder = () => {
    return (
        <div className="cart-item__order">
            <div className="cart-item__img">
                <img src={pizzaImg} alt="pizza-img" />
            </div>

            <div className="cart-item__pizza">
                <div className="cart-item__name">Сырный цыпленок</div>
                <div className="cart-item__options">тонкое тесто, 26 см.</div>
            </div>
        </div>
    );
};

export default CartItemOrder;
