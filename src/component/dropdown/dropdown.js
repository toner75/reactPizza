import React from "react";
import { connect } from "react-redux";
import { sortType, dropdownOff } from "../actions/actions";
import "./dropdown.css";

const Dropdown = ({ setSort, dropdOff }) => {
    const sortNames = ["популярные", "дешевые", "дорогие", "по алфавиту"];

    const elements = sortNames.map((item, i) => {
        return (
            <li
                key={i}
                className="dropdown__item"
                onClick={() => {
                    setSort(item);
                    dropdOff();
                }}>
                {item}
            </li>
        );
    });

    return (
        <div className="dropdown__body">
            <ul>{elements}</ul>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSort: (type) => {
            dispatch(sortType(type));
        },
        dropdOff: () => {
            dispatch(dropdownOff());
        },
    };
};

export default connect(null, mapDispatchToProps)(Dropdown);
