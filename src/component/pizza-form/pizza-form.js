import React from "react";
import { connect } from "react-redux";
import { pizzasUpdate, selectingPizza } from "../actions/actions";
import multiplicatorPrice from "../../multiplicator-price.js/multiplicator-price";
import PizzaOptions from "../pizza-options/pizza-option";
import PizzaAdd from "../pizza-add/pizza-add";

import "./pizza-form.css";

const updatePizzas = (allPizzas, id, newPizza, action) => {
    const index = allPizzas.findIndex((item) => item.id === id);

    const newArr = [
        ...allPizzas.slice(0, index),
        newPizza,
        ...allPizzas.slice(index + 1),
    ];

    action(newArr);
};

const changeHandler = (e, pizza, allPizzas, id, price, pizzasUpdate) => {
    const { value, name } = e.target;
    switch (name) {
        case "dough": {
            const type = value;
            const newPizza = {
                ...pizza,
                selectedDough: type,
            };

            updatePizzas(allPizzas, id, newPizza, pizzasUpdate);
            break;
        }

        case "size": {
            const size = +value;
            const newPizza = {
                ...pizza,
                calcPrice: multiplicatorPrice(price, size),
                selectedSize: size,
            };

            updatePizzas(allPizzas, id, newPizza, pizzasUpdate);
            break;
        }
        default:
            break;
    }
};

const pizzaAddUI = (pizza, allPizzas, id, pizzasUpdate) => {
    const newPizza = { ...pizza, pizzaAdd: true };
    updatePizzas(allPizzas, id, newPizza, pizzasUpdate);

    setTimeout(() => {
        const newPizza = {
            ...pizza,
            pizzaAdd: false,
            calcPrice: pizza.defPrice,
        };
        updatePizzas(allPizzas, id, newPizza, pizzasUpdate);
    }, 700);
};

const submitHandler = (e, selectedPizzas, pizzaOptions, selectingPizza) => {
    e.preventDefault();
    const { id: optId, dough: optDough, size: optSize } = pizzaOptions;

    const index = selectedPizzas.findIndex(
        ({ id, dough, size }) =>
            `${id}${dough}${size}` === `${optId}${optDough}${optSize}`
    );

    if (index !== -1) {
        const { counter } = selectedPizzas[index];
        const newPizza = {
            ...selectedPizzas[index],
            counter: counter + 1,
        };

        const newArr = [
            ...selectedPizzas.slice(0, index),
            newPizza,
            ...selectedPizzas.slice(index + 1),
        ];

        selectingPizza(newArr);
    } else {
        const newArr = [...selectedPizzas, pizzaOptions];
        selectingPizza(newArr);
    }
};

const PizzaForm = ({
    pizza,
    allPizzas,
    selectedPizzas,
    pizzasUpdate,
    selectingPizza,
}) => {
    const {
        price,
        types,
        sizes,
        name,
        calcPrice,
        id,
        selectedDough,
        selectedSize,
        imgUrl,
    } = pizza;

    const pizzaOptions = {
        id,
        imgUrl,
        name,
        price: calcPrice,
        dough: selectedDough,
        size: selectedSize,
        counter: 1,
    };

    return (
        <form
            className="pizza-form"
            onSubmit={(e) => {
                submitHandler(e, selectedPizzas, pizzaOptions, selectingPizza);
                pizzaAddUI(pizza, allPizzas, id, pizzasUpdate);
            }}
            onChange={(e) => {
                changeHandler(e, pizza, allPizzas, id, price, pizzasUpdate);
            }}>
            <PizzaOptions
                types={types}
                sizes={sizes}
                pizzaName={name}
                price={calcPrice}
            />

            <PizzaAdd price={calcPrice} />
        </form>
    );
};

const mapStateToProps = ({ pizzas, selectedPizzas }) => {
    return {
        allPizzas: pizzas,
        selectedPizzas,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pizzasUpdate: (newArr) => {
            dispatch(pizzasUpdate(newArr));
        },
        selectingPizza: (newArr) => {
            dispatch(selectingPizza(newArr));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm);
