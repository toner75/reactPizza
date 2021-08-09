import React from "react";

import "./cart-item-order.css";

const CartItemOrder = ({ name, size, dough, imgUrl }) => {
    return (
        <div className="cart-item__order">
            <div className="cart-item__img">
                <img src={imgUrl} alt="pizza-img" />
            </div>

            <div className="cart-item__pizza">
                <div className="cart-item__name">{name}</div>
                <div className="cart-item__options">
                    {dough} тесто, {size} см
                </div>
            </div>
        </div>
    );
};

export default CartItemOrder;
