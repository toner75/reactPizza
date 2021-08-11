import React from "react";
import { connect } from "react-redux";
import { selectingPizza } from "../actions/actions";
import "./cart-item-control.css";

const findIndex = (pizza, selectedPizzas) => {
    const { id, size, dough } = pizza;
    const index = `${id}${size}${dough}`;

    return selectedPizzas.findIndex(
        ({ id, size, dough }) => index === `${id}${size}${dough}`
    );
};

const deleteArrItem = (selectedPizzas, pizzaIndex) => {
    return [
        ...selectedPizzas.slice(0, pizzaIndex),
        ...selectedPizzas.slice(pizzaIndex + 1),
    ];
};

const changeArrItem = (selectedPizzas, pizzaIndex, newPizza) => {
    return [
        ...selectedPizzas.slice(0, pizzaIndex),
        newPizza,
        ...selectedPizzas.slice(pizzaIndex + 1),
    ];
};

const onMinus = (pizza, selectedPizzas, action) => {
    const pizzaIndex = findIndex(pizza, selectedPizzas);
    const newPizza = { ...pizza, counter: pizza.counter - 1 };

    if (newPizza.counter > 0) {
        const newArr = changeArrItem(selectedPizzas, pizzaIndex, newPizza);
        action(newArr);
    } else {
        const newArr = deleteArrItem(selectedPizzas, pizzaIndex);
        action(newArr);
    }
};

const onPlus = (pizza, selectedPizzas, selectingPizza) => {
    const pizzaIndex = findIndex(pizza, selectedPizzas);

    const newPizza = {
        ...pizza,
        counter: pizza.counter + 1,
    };

    const newArr = changeArrItem(selectedPizzas, pizzaIndex, newPizza);
    selectingPizza(newArr);
};

const onDelete = (pizza, selectedPizzas, action) => {
    const pizzaIndex = findIndex(pizza, selectedPizzas);

    const newArr = deleteArrItem(selectedPizzas, pizzaIndex);
    action(newArr);
};

const CartItemControl = ({ pizza, selectingPizza, selectedPizzas }) => {
    const { price, counter } = pizza;
    return (
        <div className="cart-item__control">
            <div className="cart-item__quantity">
                <button
                    className="cart-item__btn"
                    onClick={() => {
                        onMinus(pizza, selectedPizzas, selectingPizza);
                    }}>
                    <div className="minus" />
                </button>

                <span className="cart-item__counter">{counter}</span>

                <button
                    className="cart-item__btn"
                    onClick={() => {
                        onPlus(pizza, selectedPizzas, selectingPizza);
                    }}>
                    <div>+</div>
                </button>
            </div>

            <div className="cart-item__price">
                {Math.floor(price * counter * 100) / 100} р
            </div>

            <button
                className="cart-item__btn del"
                onClick={() => {
                    onDelete(pizza, selectedPizzas, selectingPizza);
                }}>
                <div>+</div>
            </button>
        </div>
    );
};

const mapStateToProps = ({ selectedPizzas }) => {
    return { selectedPizzas };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectingPizza: (newArr) => {
            dispatch(selectingPizza(newArr));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemControl);
