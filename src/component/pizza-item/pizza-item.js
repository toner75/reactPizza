import React from 'react';

import PizzaForm from '../pizza-form/pizza-form';

import './pizza-item.css';
import pizzaImg from '../../assets/img/pizza/1.png'

const PizzaItem = () => {
    return (
        <li className="pizza-item">
            <div >
                <img className="pizza-item__img" src={pizzaImg} alt="pizza" />
            </div>
            <h2>Чизбургер-пицца</h2>
            <PizzaForm />
        </li>
    );

};

export default PizzaItem;
