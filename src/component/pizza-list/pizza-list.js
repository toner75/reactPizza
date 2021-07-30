import React from "react";
import PizzaItem from "../pizza-item/pizza-item";

import "./pizza-list.css";

const PizzaList = () => {
    return (
        <>
            <h2 className="pizza-list__header">Все пиццы</h2>
            <ul className="pizza-list">
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
            </ul>
        </>
    );
};

export default PizzaList;
