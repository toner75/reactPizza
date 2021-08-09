import React from "react";
import { connect } from "react-redux";
import { selectingPizza } from "../actions/actions";
import "./cart-item-control.css";

const onMinus = (pizza, selectedPizzas, action) => {
    const { id, size, dough } = pizza;
    const index = `${id}${size}${dough}`;

    const findedIndex = selectedPizzas.findIndex(
        ({ id, size, dough }) => index === `${id}${size}${dough}`
    );

    const newPizza = { ...pizza, counter: pizza.counter - 1 };

    if (newPizza.counter > 0) {
        const newArr = [
            ...selectedPizzas.slice(0, findedIndex),
            newPizza,
            ...selectedPizzas.slice(findedIndex + 1),
        ];
        action(newArr);
    } else {
        const newArr = [
            ...selectedPizzas.slice(0, findedIndex),
            ...selectedPizzas.slice(findedIndex + 1),
        ];
        action(newArr);
    }
};

const onDelete = (pizza, selectedPizzas, action) => {
    const { id, size, dough } = pizza;
    const index = `${id}${size}${dough}`;

    const findedIndex = selectedPizzas.findIndex(
        ({ id, size, dough }) => index === `${id}${size}${dough}`
    );

    const newArr = [
        ...selectedPizzas.slice(0, findedIndex),
        ...selectedPizzas.slice(findedIndex + 1),
    ];

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
                        const { id, size, dough } = pizza;
                        const index = `${id}${size}${dough}`;

                        const findedIndex = selectedPizzas.findIndex(
                            ({ id, size, dough }) =>
                                index === `${id}${size}${dough}`
                        );
                        const newPizza = {
                            ...pizza,
                            counter: pizza.counter + 1,
                        };
                        const newArr = [
                            ...selectedPizzas.slice(0, findedIndex),
                            newPizza,
                            ...selectedPizzas.slice(findedIndex + 1),
                        ];

                        selectingPizza(newArr);
                    }}>
                    <div>+</div>
                </button>
            </div>

            <div className="cart-item__price">{price * counter} р</div>

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
