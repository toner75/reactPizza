import React from "react";

import "./pizza-add.css";

const PizzaAdd = () => {
    return (
        <div className="pizza-add ">
            <span className="pizza-add__value">от 200 р</span>
            <button className="btn pizza-add__btn active">
                <div className="pizza-add__plus">+</div>
                <div>Добавить</div>
                <div className="pizza-add__counter">
                    <div>3</div>
                </div>
            </button>
        </div>
    );
};

export default PizzaAdd;
