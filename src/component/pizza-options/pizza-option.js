import React from "react";

import "./pizza-option.css";

const PizzaOptions = ({ types, sizes }) => {
    
    const optionClasses = {
        thin: {
            class: "not-supported",
            checked: false,
        },
        tradition: {
            class: "not-supported",
            checked: false,
        },

        size26: {
            class: "not-supported",
            checked: false,
        },
        size30: {
            class: "not-supported",
            checked: false,
        },
        size40: {
            class: "not-supported",
            checked: false,
        },
    };

    const checkSupported = (props) => {
        props.forEach((item) => {
            switch (item) {
                case 0:
                    return (optionClasses.thin.class = "");
                case 1:
                    return (optionClasses.tradition.class = "");
                case 26:
                    return (optionClasses.size26.class = "");
                case 30:
                    return (optionClasses.size30.class = "");
                case 40:
                    return (optionClasses.size40.class = "");
                default:
                    break;
            }
        });
    };

    const setDefaultActive = (obj) => {
        for (let key in obj) {
            if (!obj[key].class) {
                obj[key].class = "active";
                obj[key].checked = true;
                break;
            }
        }
    };

    checkSupported(types);
    checkSupported(sizes);

    setDefaultActive(optionClasses);

    const {
        thin: { class: thin, checked: thinChecked },
        tradition: { class: tradition, checked: traditionChecked },
        size26: { class: size26, checked: size26Checked },
        size30: { class: size30, checked: size30Checked },
        size40: { class: size40, checked: size40Checked },
    } = optionClasses;

    return (
        <div className="pizza-options">
            <div className="pizza-options__selects dough">
                <label className={thin}>
                    <input
                        type="radio"
                        name="dough"
                        value="thin"
                        defaultChecked={thinChecked}
                    />
                    <span className="pizza-options__name">Тонкое</span>
                </label>

                <label className={tradition}>
                    <input
                        type="radio"
                        name="dough"
                        value="tradition"
                        defaultChecked={traditionChecked}
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
                        defaultChecked={size26Checked}
                    />
                    <span className="pizza-options__name">26 см.</span>
                </label>

                <label className={size30}>
                    <input
                        type="radio"
                        name="size"
                        value="30_sm"
                        defaultChecked={size30Checked}
                    />
                    <span className="pizza-options__name">30 см.</span>
                </label>

                <label className={size40}>
                    <input
                        type="radio"
                        name="size"
                        value="40_sm"
                        defaultChecked={size40Checked}
                    />
                    <span className="pizza-options__name">40 см.</span>
                </label>
            </div>
        </div>
    );
};

export default PizzaOptions;
