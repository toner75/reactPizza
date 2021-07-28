import React from "react";
import Filter from "../filter/filter";
import PizzaList from "../pizza-list/pizza-list";

const HomePage = () => {
    return (
        <>
            <Filter />
            <PizzaList />
        </>
    );
};

export default HomePage;
