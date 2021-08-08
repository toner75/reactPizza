import React from "react";
import { connect } from "react-redux";
import { selectingPizza } from "../actions/actions";
import "./cart-item-control.css";

const CartItemControl = ({ counter, pizzasGroup, allPizzas, selectingPizza }) => {
    const pizza = pizzasGroup[0];
    const { id, size, dough, price } = pizza;
    const totalPrice = Math.floor(counter * price * 100) / 100;

    return (
        <div className="cart-item__control">
            <div className="cart-item__quantity">
                <button
                    className="cart-item__btn"
                    onClick={() => {
                        const index = allPizzas.findIndex(
                            (item) =>
                                `${id}${size}${dough}` ===
                                `${item.id}${item.size}${item.dough}`
                        );

                        const before = allPizzas.slice(0, index);
                        const after = allPizzas.slice(index + 1);

                        const newArr = [...before, ...after];
                        console.log('minus', newArr)
                        selectingPizza(newArr)
                    }}>
                    <div className="minus" />
                </button>
                <span className="cart-item__counter">{counter}</span>
                <button className="cart-item__btn" onClick={() => {
                    const newArr = [...allPizzas, pizza];
                    console.log('plus', newArr)

                    selectingPizza(newArr);
                }}>
                    <div>+</div>
                </button>
            </div>

            <div className="cart-item__price">{totalPrice} р</div>

            <button className="cart-item__btn del">
                <div>+</div>
            </button>
        </div>
    );
};

const mapStateToProps = ({selectedPizzas}) => {
    return {
        allPizzas: selectedPizzas
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        selectingPizza: (newArr) => {
            dispatch(selectingPizza(newArr))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartItemControl);
