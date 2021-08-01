import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../store";

import PizzaItem from "../pizza-item/pizza-item";
import getPizzas from "../../services/pizza-service";
import { pizzasLoaded } from "../actions/actions";

import "./pizza-list.css";

const PizzaList = ({ pizzas }) => {
    useEffect(() => {
        getPizzas().then((res) => {
            store.dispatch(pizzasLoaded(res));
        });
    }, []);

    const pizzaItems = pizzas.map((items) => (
        <PizzaItem pizzas={items} key={items.id} />
    ));

    return (
        <>
            <h2 className="pizza-list__header">Все пиццы</h2>

            <ul className="pizza-list">{pizzaItems}</ul>
        </>
    );
};

const mapStateToProps = ({ pizzas }) => {
    return { pizzas };
};

export default connect(mapStateToProps)(PizzaList);
