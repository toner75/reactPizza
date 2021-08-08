import React from "react";

import './cart-order.css';

const CartOrder = ({totalCounter, totalPrice}) => {
    return(
        <div className="cart-order">
            <div>
                Всего пицц: <span className="cart-order__quantity" >{totalCounter} шт.</span>
            </div>
            <div>
                Сумма заказа: <span className="cart-order__sum" >{totalPrice} р</span>
            </div>
        </div>
    );
};

export default CartOrder;