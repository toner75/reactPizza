import React from "react";
import { connect } from "react-redux";
import { setPrice } from "../actions/actions";
import multiplicatorPrice from "../../multiplicator-price.js/multiplicator-price";
import PizzaOptions from "../pizza-options/pizza-option";
import PizzaAdd from "../pizza-add/pizza-add";

import "./pizza-form.css";

const PizzaForm = ({ pizza, allPizzas, setPrice }) => {
     
    const { price, types, sizes, name, calcPrice, id } = pizza;
    return (
        <form
            className="pizza-form"
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {};
                formData.forEach((value, key) => {
                    obj[key] = value;
                });

                console.log(obj);
                
            }}
            onChange={(e) => {
                const size = +e.target.value;
                const newPizza = {...pizza, calcPrice: multiplicatorPrice(price, size) }

                const index = allPizzas.findIndex(item => item.id === id )

                

                const before = allPizzas.slice(0, index);
                const after = allPizzas.slice(index + 1);

                const newArr = [...before, newPizza, ...after];

                setPrice(newArr)

            }}>
                
            <PizzaOptions types={types} sizes={sizes} pizzaName={name} />
            <PizzaAdd price={calcPrice} />
        </form>
    );
};

const mapStateToProps = ({pizzas}) => {
    return {
        allPizzas: pizzas
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPrice: (newArr) => {
            dispatch(setPrice(newArr));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm);
