import React from 'react';

import './dropdown.css';

const Dropdown = () => {
    return (
        <div className="dropdown__body">
            <ul>
                <li className="dropdown__item active">
                    <a href="/">Популярности</a>
                </li>
                <li className="dropdown__item">
                    <a href="/">Цене</a>
                </li>
                <li className="dropdown__item">
                    <a href="/">Алфавиту</a>
                </li>
            </ul>

        </div>
    );
};

export default Dropdown;