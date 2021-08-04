import React from "react";

import "./pizza-option.css";

const PizzaOptions = ({ types, sizes }) => {
    const typeData = [
        { name: "Тонкое", value: "thin" },
        { name: "Традиционное", value: "tradition" },
    ];

    const sizeData = [
        { name: "26 см.", value: 26 },
        { name: "30 см.", value: 30 },
        { name: "40 см.", value: 40 },
    ];

    let dFlag = false;

    const doughElements = typeData.map(({ name, value }) => {
        let activeClass;

        if (types.find((storeValue) => storeValue === value)) {
            if (!dFlag) {
                activeClass = "active";
                dFlag = true;
            } else activeClass = "";

            return (
                <label key={value} className={activeClass}>
                    <input type="radio" name="dough" value={value} />
                    <span className="pizza-options__name">{name}</span>
                </label>
            );
        } else
            return (
                <label key={value} className="not-supported">
                    <span className="pizza-options__name">{name}</span>
                </label>
            );
    });

    return (
        <div className="pizza-options">
            <div className="pizza-options__selects dough">{doughElements}</div>

            <div className="pizza-options__selects size">
                <label>
                    <input type="radio" name="size" value="26_sm" />
                    <span className="pizza-options__name">26 см.</span>
                </label>

                <label>
                    <input type="radio" name="size" value="30_sm" />
                    <span className="pizza-options__name">30 см.</span>
                </label>

                <label>
                    <input type="radio" name="size" value="40_sm" />
                    <span className="pizza-options__name">40 см.</span>
                </label>
            </div>
        </div>
    );
};

export default PizzaOptions;

/* const PizzaOptions = ({ types, sizes }) => {
    
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
}; */
