import React from "react";
import CartItemControl from "../cart-item-control/cart-item-control";
import CartItemOrder from "../cart-item-order/cart-item-order";

import "./cart-item.css";

const CartItem = () => {
    return (
        <li>
            <div className="cart-item__divider" />

            <div className="cart-item">
                <CartItemOrder />
                <CartItemControl />
            </div>
        </li>
    );
};

export default CartItem;
