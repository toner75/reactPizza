import React from 'react';
import './dropdown.css';

const Dropdown = () => {
    return (
        <div className="dropdown__body">
            <ul>
                <li className="dropdown__item">
                    <button>Популярности</button>
                </li>
                <li className="dropdown__item">
                    <button >Цене</button>
                </li>
                <li className="dropdown__item">
                    <button >Алфавиту</button>
                </li>
            </ul>

        </div>
    );
};

export default Dropdown;