import React from "react";

import "./pizza-option.css";

const PizzaOptions = ({ types, sizes }) => {
    const doughClasses = {
        thin: "not-supported",
        tradition: "not-supported",
    };

    const sizeClasses = {
        size26: "not-supported",
        size30: "not-supported",
        size40: "not-supported",
    };

    const defaultChecked = {
        thin: false,
        tradition: false,
        size26: false,
        size30: false,
        size40: false,
    };

    const checkSupported = (props) => {
        props.forEach((item) => {
            switch (item) {
                case 0:
                    return (doughClasses.thin = "");
                case 1:
                    return (doughClasses.tradition = "");
                case 26:
                    return (sizeClasses.size26 = "");
                case 30:
                    return (sizeClasses.size30 = "");
                case 40:
                    return (sizeClasses.size40 = "");
                default:
                    break;
            }
        });
    };

    const addActiveClass = (classes, cheked) => {
        for (let key in classes) {
            if (!classes[key]) {
                classes[key] = "active";
                cheked[key] = true;
                break;
            }
        }
    };

    checkSupported(types);
    checkSupported(sizes);

    addActiveClass(doughClasses, defaultChecked);
    addActiveClass(sizeClasses, defaultChecked);

    const { thin, tradition } = doughClasses;
    const { size26, size30, size40 } = sizeClasses;

    return (
        <div className="pizza-options">
            <div className="pizza-options__selects dough">
                <label className={thin}>
                    <input
                        type="radio"
                        name="dough"
                        value="thin"
                        defaultChecked={defaultChecked.thin}
                    />
                    <span className="pizza-options__name">Тонкое</span>
                </label>

                <label className={tradition}>
                    <input
                        type="radio"
                        name="dough"
                        value="tradition"
                        defaultChecked={defaultChecked.tradition}
                    />
                    <span className="pizza-options__name">Традиционное</span>
                </label>
            </div>

            <div className="pizza-options__selects size">
                <label className={size26}>
                    <input
                        type="radio"
                        name="size"
                        value="26_sm"
                        defaultChecked={defaultChecked.size26}
                    />
                    <span className="pizza-options__name">26 см.</span>
                </label>

                <label className={size30}>
                    <input
                        type="radio"
                        name="size"
                        value="30_sm"
                        defaultChecked={defaultChecked.size30}
                    />
                    <span className="pizza-options__name">30 см.</span>
                </label>

                <label className={size40}>
                    <input
                        type="radio"
                        name="size"
                        value="40_sm"
                        defaultChecked={defaultChecked.size40}
                    />
                    <span className="pizza-options__name">40 см.</span>
                </label>
            </div>
        </div>
    );
};

export default PizzaOptions;
