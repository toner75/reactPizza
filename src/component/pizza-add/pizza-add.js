import React from "react";

import "./pizza-add.css";

const PizzaAdd = ({ price }) => {
    return (
        <div className="pizza-add ">
            <span className="pizza-add__value">от {price} р</span>
            <button className="btn pizza-add__btn" type="submit">
                Добавить
            </button>
        </div>
    );
};

export default PizzaAdd;
