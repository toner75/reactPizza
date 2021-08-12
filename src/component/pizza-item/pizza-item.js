import React from "react";

import PizzaForm from "../pizza-form/pizza-form";

import "./pizza-item.css";

const PizzaItem = ({ pizza }) => {
    const { imgUrl, name, pizzaAdd  } = pizza;

    if (!pizzaAdd) {
        return (
            <li className="pizza-item animate__animated animate__fadeIn">
                <div>
                    <img className="pizza-item__img" src={imgUrl} alt="pizza" />
                </div>
                <h2>{name}</h2>
                <PizzaForm pizza={pizza} />
            </li>
        );
    } else {
        return (
            <li className="pizza-item ">
                <div>
                    <img className="pizza-item__img animate__animated animate__fadeOut" src={imgUrl} alt="pizza" />
                </div>
                <h2>Пицца добавленна!</h2>
                
            </li>
        )
    }
};

export default PizzaItem;
