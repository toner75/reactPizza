import React from "react";
import createOptions from "../../create-options/create-options";

import "./pizza-option.css";

const PizzaOptions = ({ types, sizes }) => {
    const doughData = [
        { name: "Тонкое", value: "тонкое" },
        { name: "Традиционное", value: "традиционное" },
    ];

    const sizeData = [
        { name: "26 см.", value: 26 },
        { name: "30 см.", value: 30 },
        { name: "40 см.", value: 40 },
    ];

    const doughElements = createOptions(doughData, types, "dough");
    const sizeElements = createOptions(sizeData, sizes, "size");

    return (
        <div className="pizza-options">
            <div className="pizza-options__selects dough">{doughElements}</div>
            <div className="pizza-options__selects size">{sizeElements}</div>
        </div>
    );
};

export default PizzaOptions;
