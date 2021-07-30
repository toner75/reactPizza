import React from "react";

import "./pizza-option.css";

const PizzaOptions = () => {
    return (
        <div className="pizza-options">
            <div className="pizza-options__selects dough">
                <label className="active">
                    <input
                        type="radio"
                        name="dough"
                        value="thin"
                        defaultChecked
                    />
                    <span className="pizza-options__name">Тонкое</span>
                </label>

                <label>
                    <input type="radio" name="dough" value="tradition" />
                    <span className="pizza-options__name">Традиционное</span>
                </label>
            </div>

            <div className="pizza-options__selects size">
                <label className="active">
                    <input
                        type="radio"
                        name="size"
                        value="26_sm"
                        defaultChecked
                    />
                    <span className="pizza-options__name">26 см.</span>
                </label>

                <label className="not-supported">
                    <input 
                        type="radio" 
                        name="size" 
                        value="30_sm" 
                    />
                    <span className="pizza-options__name">30 см.</span>
                </label>

                <label>
                    <input 
                        type="radio" 
                        name="size" 
                        value="40_sm" 
                    />
                    <span className="pizza-options__name">40 см.</span>
                </label>
            </div>
        </div>
    );
};

export default PizzaOptions;
