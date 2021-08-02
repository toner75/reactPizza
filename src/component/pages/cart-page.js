import React from "react";

/* import CartEmpty from "../cart-empty/cart-empty"; */
import CartList from "../cart-list/cart-list";
import ErrorBoundry from "../error-boundry/error-boundry";

const CartPage = () => {
    return (
        <ErrorBoundry>
            <CartList />
        </ErrorBoundry>
    );
};

export default CartPage;
