import React from "react";
import ErrorBoundry from "../error-boundry/error-boundry";
import Filter from "../filter/filter";
import PizzaList from "../pizza-list/pizza-list";

const HomePage = () => {
    return (
        <>
            <Filter />
            <ErrorBoundry>
                <PizzaList />
            </ErrorBoundry>
        </>
    );
};

export default HomePage;
