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
        const { 
            pizzasRequested, 
            pizzasLoaded, 
            pizzasError 
        } = this.props;

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
        const { 
            pizzas, 
            loading, 
            error, 
            filter,
            sort 
        } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }


        const pizzaCategory = pizzas.filter(({category}) => {
             return filter.type === "all" || filter.type === category 
        })


        const pizzaSort = (arr, type) => {

            const sortAlphabet = (a, b) => {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
            }
            const sortLowPrice = (a, b) => (a.price - b.price);
            const sortHighPrice = (a, b) => (b.price - a.price);
            const sortPopular = (a, b) => (b.rating - a.rating);

            let newPizzas;

            switch (type) {
                case "популярные": 
                    return newPizzas = arr.sort(sortPopular);

                case "дешевые": 
                    return newPizzas = arr.sort(sortLowPrice);

                case "дорогие": 
                    return newPizzas = arr.sort(sortHighPrice);

                case "по алфавиту": 
                    return newPizzas = arr.sort(sortAlphabet);

                default: break; 
            }

            return newPizzas
        }

        console.log(pizzaSort(pizzaCategory, sort))








        /* const pizzaItems = pizzas
            .map((items) => {
                if (filter.type === "all" || filter.type === items.category) {
                return <PizzaItem pizzas={items} key={items.id} />;
                }   else return null;
            })
            


        let pizzasHeader = filter.name;
        if (filter.type === 'all') {
            pizzasHeader += " пиццы";
        } */

        return (
            <>
                <h2 className="pizza-list__header">pizzasHeader</h2>
                <ul className="pizza-list">pizzaItems</ul>
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
