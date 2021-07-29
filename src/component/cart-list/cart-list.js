import React from "react";
import CartHeader from "../cart-header/cart-header";
import CartItem from "../cart-item/cart-item";
import CartOrder from "../cart-order/cart-order";

import "./cart-list.css";

const CartList = () => {
    return (
        <div className="cart-list">
            <CartHeader />
            <ul>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartOrder />
            </ul>
            <div className="cart-list__nav">
                <button className="btn cart-list__back">
                    <div>
                        <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 13L1 6.93015L6.86175 1"
                                stroke="#D3D3D3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span>Вернуться назад</span>
                </button>
                <button className="btn cart-list__pay">Оплатить сейчас</button>
            </div>
        </div>
    );
};

export default CartList;
