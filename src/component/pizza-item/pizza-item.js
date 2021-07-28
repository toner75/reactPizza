import React from 'react';
import PizzaOptions from '../pizza-options/pizza-option';

import './pizza-item.css';

import pizzaImg from '../../assets/img/pizza/1.png'

const PizzaItem = () => {
    return (
        <li className="pizza-item">
            <div>
                <img src={pizzaImg} alt="pizza" />
            </div>
            <h2>Чизбургер-пицца</h2>
            <PizzaOptions />
        </li>
    );

};

export default PizzaItem;
