import React from "react";

import "./cart-item-control.css";

const CartItemControl = ({counter, price}) => {
    const totalPrice = Math.floor(counter * price * 100) / 100;
    return (
        <div className="cart-item__control">
            <div className="cart-item__quantity">
                <button className="cart-item__btn">
                    <div className="minus" />
                </button>
                <span className="cart-item__counter">{counter}</span>
                <button className="cart-item__btn">
                    <div>+</div>
                </button>
            </div>

            <div className="cart-item__price">{totalPrice} р</div>

            <button className="cart-item__btn del">
                <div>+</div>
            </button>
        </div>
    );
};

export default CartItemControl;
