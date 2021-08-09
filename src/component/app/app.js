import React from "react";
import { Route } from "react-router";

import Header from "../header/header";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

import "./app.css";

const App = () => {
    
    return (
        <div className="app__body">
            <Header />
            <div className="app__divider"></div>
            <Route exact path="/" component={HomePage} />
            <Route path="/cart" component={CartPage} />
        </div>
    );
};

export default App;
