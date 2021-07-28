import React from "react";

import PizzaOptions from "../pizza-options/pizza-option";
import PizzaAdd from "../pizza-add/pizza-add";

import "./pizza-form.css";

import "./pizza-form.css";

const PizzaForm = () => {
    return (
        <form className="pizza-form">
            <PizzaOptions />
            <PizzaAdd />
        </form>
    );
};

export default PizzaForm;
