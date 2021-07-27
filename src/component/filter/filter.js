import React from 'react';
import Sort from '../sort/sort';

import './filter.css'

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter__btns">
                <button className="btn filter__btn active">Все</button>
                <button className="btn filter__btn">Мясные</button>
                <button className="btn filter__btn">Вегетарианские</button>
                <button className="btn filter__btn">Гриль</button>
                <button className="btn filter__btn">Острые</button>
                <button className="btn filter__btn">Закрытые</button>
            </div>
            <div className="filter__sort">
                <Sort />
            </div>

        </div>
    );
};

export default Filter