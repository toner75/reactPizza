import React, { Component } from "react";
import { connect } from "react-redux";

import PizzaItem from "../pizza-item/pizza-item";
import getPizzas from "../../services/pizza-service";
import { pizzasLoaded, pizzasRequested, pizzasError } from "../actions/actions";
import multiplicatorPrice from "../../multiplicator-price.js/multiplicator-price";
import filterAndSort from "../../filter-and-sort/filter-and-sort";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";

import "./pizza-list.css";

class PizzaList extends Component {
    componentDidMount() {
        const { pizzasRequested, pizzasLoaded, pizzasError } = this.props;

        pizzasRequested();

        getPizzas()
            .then((res) => {
                const newArr = res.map((item) => {
                    const { price, sizes, types } = item;
                    return {
                        ...item,
                        calcPrice: multiplicatorPrice(price, sizes[0]),
                        selectedSize: sizes[0],
                        selectedDough: types[0],
                    };
                });

                pizzasLoaded(newArr);
            })
            .catch((err) => {
                pizzasError(err);
            });
    }

    render() {
        const { pizzas, loading, error, filter, sort } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        const pizzaItems = filterAndSort(pizzas, filter, sort).map((items) => {
            return <PizzaItem pizza={items} key={items.id} />;
        });

        return (
            <>
                <h2 className="pizza-list__header">{filter.name}</h2>
                <ul className="pizza-list">{pizzaItems}</ul>
            </>
        );
    }
}

const mapStateToProps = ({ pizzas, loading, error, filter, sort }) => {
    return { pizzas, loading, error, filter, sort };
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
