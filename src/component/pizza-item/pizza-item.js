import React from 'react';

import PizzaForm from '../pizza-form/pizza-form';

import './pizza-item.css';

const PizzaItem = ({pizza}) => {
    const {imgUrl, name} = pizza;
    return (
        <li  className="pizza-item">
            <div >
                <img className="pizza-item__img" src={imgUrl} alt="pizza" />
            </div>
            <h2>{name}</h2>
            <PizzaForm pizza={pizza} />
        </li>
    );

};

export default PizzaItem;
