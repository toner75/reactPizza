import React from "react";
import { connect } from "react-redux";

import CartEmpty from "../cart-empty/cart-empty";
import CartList from "../cart-list/cart-list";
import ErrorBoundry from "../error-boundry/error-boundry";

const CartPage = ({ selectedPizzas }) => {
    if (!selectedPizzas.length) {
        return (
            <ErrorBoundry>
                <CartEmpty />
            </ErrorBoundry>
        );
    } else {
        return (
            <ErrorBoundry>
                <CartList selectedPizzas={selectedPizzas} />
            </ErrorBoundry>
        );
    }
};

const mapStateToProps = ({ selectedPizzas }) => {
    return { selectedPizzas };
};

export default connect(mapStateToProps)(CartPage);
