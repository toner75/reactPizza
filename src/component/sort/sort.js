import React from 'react';
import Dropdown from '../dropdown/dropdown';

import arrowImg from '../../assets/img/svg/arrow-up.svg'

import './sort.css';

const Sort = () => {
    return (
        <>
            <div className="sort">
                <img className="sort__dropdown-arrow active" src={arrowImg} alt="arrow-icon" />
                <div className="sort__title">Сортировать по:</div>
                <a className="sort__type" href="/">популярности</a>
            </div>
            <Dropdown />
        </>
        
        

    );
};

export default Sort;