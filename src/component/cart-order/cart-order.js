import React from "react";

import './cart-order.css';

const CartOrder = () => {
    return(
        <div className="cart-order">
            <div>
                Всего пицц: <span className="cart-order__quantity" >3 шт.</span>
            </div>
            <div>
                Сумма заказа: <span className="cart-order__sum" >900 р</span>
            </div>
        </div>
    );
};

export default CartOrder;