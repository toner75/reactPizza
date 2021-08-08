import React from "react";
import { connect } from "react-redux";

import CartEmpty from "../cart-empty/cart-empty";
import CartList from "../cart-list/cart-list";
import ErrorBoundry from "../error-boundry/error-boundry";

const CartPage = ({ pizzas }) => {
    if (!pizzas.length) {
        return (
            <ErrorBoundry>
                <CartEmpty />
            </ErrorBoundry>
        );
    } else {
        return (
            <ErrorBoundry>
                <CartList />
            </ErrorBoundry>
        );
    }
};

const mapStateToProps = ({ selectedPizzas }) => {
    return {
        pizzas: selectedPizzas,
    };
};

export default connect(mapStateToProps)(CartPage);
