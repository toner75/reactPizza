import React from 'react'
import Header from '../header/header';
import Filter from '../filter/filter';
import PizzaList from '../pizza-list/pizza-list';

import './app.css'

const App = () => {
    return (
        <div className="app__body">
            <Header />
            <div className="app__divider"></div>
            <Filter />
            <PizzaList />
        </div>
    )
};

export default App;