import React from "react";
import { connect } from "react-redux";
import { setPrice, selectingPizza } from "../actions/actions";
import multiplicatorPrice from "../../multiplicator-price.js/multiplicator-price";
import PizzaOptions from "../pizza-options/pizza-option";
import PizzaAdd from "../pizza-add/pizza-add";

import "./pizza-form.css";

const upd = (allPizzas, id, newPizza, action) => {
    const index = allPizzas.findIndex((item) => item.id === id);

    const newArr = [
        ...allPizzas.slice(0, index),
        newPizza,
        ...allPizzas.slice(index + 1),
    ];

    action(newArr);
};

const updateSelectedOptions = (e, pizza, allPizzas, id, price, setPrice) => {
    const { value, name } = e.target;
    switch (name) {
        case "dough": {
            const type = value;
            const newPizza = {
                ...pizza,
                selectedDough: type,
            };

            upd(allPizzas, id, newPizza, setPrice);
            break;
        }

        case "size": {
            const size = +value;
            const newPizza = {
                ...pizza,
                calcPrice: multiplicatorPrice(price, size),
                selectedSize: size,
            };

            upd(allPizzas, id, newPizza, setPrice);
            break;
        }
        default:
            break;
    }
};

const PizzaForm = ({
    pizza,
    allPizzas,
    selectedPizzas,
    setPrice,
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

    return (
        <form
            className="pizza-form"
            onSubmit={(e) => {
                e.preventDefault();
                const pizzaOptions = {
                    id,
                    imgUrl,
                    name,
                    price: calcPrice,
                    dough: selectedDough,
                    size: selectedSize,
                };

                const newArr = [...selectedPizzas, pizzaOptions];
                selectingPizza(newArr);
            }}
            onChange={(e) => {
                updateSelectedOptions(e, pizza, allPizzas, id, price, setPrice);
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm);
