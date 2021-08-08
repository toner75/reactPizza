import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartHeader from "../cart-header/cart-header";
import CartItem from "../cart-item/cart-item";
import CartOrder from "../cart-order/cart-order";

import "./cart-list.css";

const transformPizzasArr = (pizzas) => {
    const map = pizzas.reduce((r, item) => {
        const { id, size, dough } = item;
        const index = `${id}${size}${dough}`;
        r[index] = r[index] || [];
        r[index].push(item);
        return r;
    }, {});

    const arr1 = [];
    for (const key in map) {
        arr1.push(map[key]);
    }

    return arr1;
};

const CartList = ({ pizzas }) => {
    console.log('pizzas', pizzas)

    const pizzasArr = transformPizzasArr(pizzas);
    console.log('pizzasArr', pizzasArr)

    const totalCounter = pizzas.length;
    const totalPrice =
        Math.floor(pizzas.reduce((sum, { price }) => (sum += price), 0) * 100) /
        100;

    const pizzasElements = pizzasArr.map((item) => (
        <CartItem
            pizzas={item}
            key={`${item[0].id} ${item[0].size} ${item[0].dough}`}
        />
    ));

    return (
        <div className="cart-list">
            <CartHeader />
            <ul>
                {pizzasElements}
                <CartOrder
                    totalCounter={totalCounter}
                    totalPrice={totalPrice}
                />
            </ul>
            <div className="cart-list__nav">
                <Link to="/">
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
                </Link>

                <button className="btn cart-list__pay">Оплатить сейчас</button>
            </div>
        </div>
    );
};

const mapStateToProps = ({ selectedPizzas }) => {
    return {
        pizzas: selectedPizzas,
    };
};

export default connect(mapStateToProps)(CartList);
