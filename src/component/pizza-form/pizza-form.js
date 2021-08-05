import React from "react";

import PizzaOptions from "../pizza-options/pizza-option";
import PizzaAdd from "../pizza-add/pizza-add";

import "./pizza-form.css";


const PizzaForm = ({pizzas}) => {
    const {price, types, sizes} = pizzas;
    return (
        <form 
            className="pizza-form" 
            onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const obj = {};
                formData.forEach((value, key) => {
                    obj[key] = value;
                })

                console.log(obj)}
            }
            onChange={(e) => {
                console.log(e.target)
            }}
        >
            <PizzaOptions types={types} sizes={sizes} />
            <PizzaAdd price={price} />
        </form>
    );
};

export default PizzaForm;
