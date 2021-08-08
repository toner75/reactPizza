import React from "react";
import CartItemControl from "../cart-item-control/cart-item-control";
import CartItemOrder from "../cart-item-order/cart-item-order";

import "./cart-item.css";

const CartItem = ({ pizzas }) => {
    const { imgUrl, name, dough, size, price } = pizzas[0];
    const counter = pizzas.length
    return (
        <li>
            <div className="cart-item__divider" />

            <div className="cart-item">
                <CartItemOrder
                    imgUrl={imgUrl}
                    name={name}
                    dough={dough}
                    size={size}
                />
                <CartItemControl counter={counter} price={price} />
            </div>
        </li>
    );
};

export default CartItem;
