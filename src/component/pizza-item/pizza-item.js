import React from 'react';

import PizzaForm from '../pizza-form/pizza-form';

import './pizza-item.css';

const PizzaItem = ({pizzas}) => {
    const {imgUrl, name} = pizzas;
    return (
        <li  className="pizza-item">
            <div >
                <img className="pizza-item__img" src={imgUrl} alt="pizza" />
            </div>
            <h2>{name}</h2>
            <PizzaForm pizzas={pizzas} />
        </li>
    );

};

export default PizzaItem;
