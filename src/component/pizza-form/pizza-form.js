import React from "react";

import PizzaOptions from "../pizza-options/pizza-option";
import PizzaAdd from "../pizza-add/pizza-add";

import "./pizza-form.css";


const PizzaForm = ({pizzas}) => {
    const {price, types, sizes} = pizzas;
    return (
        <form className="pizza-form">
            <PizzaOptions types={types} sizes={sizes} />
            <PizzaAdd price={price} />
        </form>
    );
};

export default PizzaForm;
