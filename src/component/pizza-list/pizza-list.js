import React, { Component } from "react";
import { connect } from "react-redux";

import PizzaItem from "../pizza-item/pizza-item";
import getPizzas from "../../services/pizza-service";
import { pizzasLoaded, pizzasRequested, pizzasError } from "../actions/actions";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";

import "./pizza-list.css";

class PizzaList extends Component {
    componentDidMount() {
        const { pizzasRequested, pizzasLoaded, pizzasError } = this.props;

        pizzasRequested();

        getPizzas()
            .then((res) => {
                pizzasLoaded(res);
            })
            .catch((err) => {
                pizzasError(err);
            });
    }

    render() {
        const { pizzas, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        const pizzaItems = pizzas.map((items) => (
            <PizzaItem pizzas={items} key={items.id} />
        ));

        return (
            <>
                <h2 className="pizza-list__header">Все пиццы</h2>

                <ul className="pizza-list">{pizzaItems}</ul>
            </>
        );
    }
}

const mapStateToProps = ({ pizzas, loading, error }) => {
    return { pizzas, loading, error };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pizzasRequested: () => {
            dispatch(pizzasRequested());
        },

        pizzasLoaded: (pizzas) => {
            dispatch(pizzasLoaded(pizzas));
        },

        pizzasError: (err) => {
            dispatch(pizzasError(err));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);
