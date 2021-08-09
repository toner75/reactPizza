import React from "react";
import { connect } from "react-redux";
import { setPrice, selectingPizza, pizzaAdd } from "../actions/actions";
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

const changeHandler = (e, pizza, allPizzas, id, price, setPrice) => {
    const { value, name } = e.target;
    switch (name) {
        case "dough": {
            const type = value;
            const newPizza = {
                ...pizza,
                selectedDough: type,
            };

            updatePizzas(allPizzas, id, newPizza, setPrice);
            break;
        }

        case "size": {
            const size = +value;
            const newPizza = {
                ...pizza,
                calcPrice: multiplicatorPrice(price, size),
                selectedSize: size,
            };

            updatePizzas(allPizzas, id, newPizza, setPrice);
            break;
        }
        default:
            break;
    }
};

const submitHandler = (
    e,
    id,
    imgUrl,
    name,
    calcPrice,
    selectedDough,
    selectedSize,
    selectedPizzas,
    selectingPizza
) => {
    e.preventDefault();
    console.log(selectedPizzas)
    const pizzaOptions = {
        id,
        imgUrl,
        name,
        price: calcPrice,
        dough: selectedDough,
        size: selectedSize,
        counter: 1
    };
    const {id:optId, dough:optDough, size:optSize} = pizzaOptions;

    const index = selectedPizzas.findIndex((item) => `${item.id}${item.dough}${item.size}` === `${optId}${optDough}${optSize}` );


    if(index !== -1) {
        const newPizza = {...selectedPizzas[index], counter: selectedPizzas[index].counter + 1  }

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

const pizzaAddUI = (pizza, allPizzas, id, pizzaAdd) => {
    const newPizza = { ...pizza, pizzaAdd: true };
    updatePizzas(allPizzas, id, newPizza, pizzaAdd);

    setTimeout(() => {
        const newPizza = { ...pizza, pizzaAdd: false };
        updatePizzas(allPizzas, id, newPizza, pizzaAdd);
    }, 700);
};

const PizzaForm = ({
    pizza,
    allPizzas,
    selectedPizzas,
    setPrice,
    selectingPizza,
    pizzaAdd,
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

    return (
        <form
            className="pizza-form"
            onSubmit={(e) => {
                submitHandler(
                    e,
                    id,
                    imgUrl,
                    name,
                    calcPrice,
                    selectedDough,
                    selectedSize,
                    selectedPizzas,
                    selectingPizza
                );
                pizzaAddUI(pizza, allPizzas, id, pizzaAdd);
            }}
            onChange={(e) => {
                changeHandler(e, pizza, allPizzas, id, price, setPrice);
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
        setPrice: (newArr) => {
            dispatch(setPrice(newArr));
        },
        selectingPizza: (newArr) => {
            dispatch(selectingPizza(newArr));
        },
        pizzaAdd: (newArr) => {
            dispatch(pizzaAdd(newArr));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm);
