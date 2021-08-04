import React from "react";
import renderOptions from "../../render-options/render-options";

import "./pizza-option.css";

const PizzaOptions = ({ types, sizes }) => {
    const doughData = [
        { name: "Тонкое", value: "thin" },
        { name: "Традиционное", value: "tradition" },
    ];

    const sizeData = [
        { name: "26 см.", value: 26 },
        { name: "30 см.", value: 30 },
        { name: "40 см.", value: 40 },
    ];

    const doughElements = renderOptions(doughData, types, "dough");
    const sizeElements = renderOptions(sizeData, sizes, "size");

    return (
        <div className="pizza-options">
            <div className="pizza-options__selects dough">
                {doughElements}
            </div>

            <div className="pizza-options__selects size">
                {sizeElements}
            </div>
        </div>
    );
};

export default PizzaOptions;

