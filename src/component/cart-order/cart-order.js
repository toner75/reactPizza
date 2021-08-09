import React from "react";

import './cart-order.css';

const CartOrder = ({selectedPizzas}) => {
    let totalCounter = 0;
    let totalPrice = 0;

    selectedPizzas.forEach(({ counter, price }) => {
        totalCounter += counter;
        totalPrice += counter * price;
    });

    totalPrice = Math.floor(totalPrice * 100) / 100;

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