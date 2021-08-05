import React from "react";

import "./pizza-add.css";

const PizzaAdd = ({ price }) => {
    return (
        <div className="pizza-add ">
            <span className="pizza-add__value">{price}</span>
            <button className="btn pizza-add__btn" type="submit">
                <div className="pizza-add__plus">+</div>
                <div>Добавить</div>
                {/* <div className="pizza-add__counter">
                    <div>3</div>
                </div> or {null} */}
            </button>
        </div>
    );
};

export default PizzaAdd;
