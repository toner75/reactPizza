import React from "react";
import CartItemControl from "../cart-item-control/cart-item-control";
import CartItemOrder from "../cart-item-order/cart-item-order";

import "./cart-item.css";

const CartItem = ({ pizzasGroup, allPizzas }) => {
    const { imgUrl, name, dough, size } = pizzasGroup[0];
    const counter = pizzasGroup.length
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
                <CartItemControl counter={counter} pizzasGroup={pizzasGroup} />
            </div>
        </li>
    );
};

export default CartItem;
