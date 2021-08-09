import React from "react";
import CartItemControl from "../cart-item-control/cart-item-control";
import CartItemOrder from "../cart-item-order/cart-item-order";

import "./cart-item.css";

const CartItem = ({ pizza }) => {
    const { name, size, dough, imgUrl} = pizza;
    return (
        <li>
            <div className="cart-item__divider" />

            <div className="cart-item">
                <CartItemOrder
                    name={name}
                    imgUrl={imgUrl}
                    size={size}
                    dough={dough}
                />
                <CartItemControl pizza={pizza} />
            </div>
        </li>
    );
};

export default CartItem;
