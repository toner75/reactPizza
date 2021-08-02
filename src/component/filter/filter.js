import React from "react";
import { connect } from "react-redux";
import { filterType } from "../actions/actions";

import Sort from "../sort/sort";

import "./filter.css";

const Filter = ({ filter, filterType }) => {
    const btns = [
        { name: "Все", type: "all" },
        { name: "Мясные", type: 0 },
        { name: "Вегетарианские", type: 1 },
        { name: "Гриль", type: 2 },
        { name: "Острые", type: 3 },
        { name: "Закрытые", type: 4 },
    ];

    const elements = btns.map(({ name, type }) => {
        let clazzName = "btn filter__btn";

        if (filter.type === type) {
            clazzName += " active";
        }

        return (
            <button
                key={type}
                className={clazzName}
                onClick={() => {
                    filterType(type, name);
                }}>
                {name}
            </button>
        );
    });


    return (
        <div className="filter">
            <div className="filter__btns">{elements}</div>
            <div className="filter__sort">
                <Sort />
            </div>
        </div>
    );
};

const mapStateToProps = ({ filter }) => {
    return { filter };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterType: (type, name) => {
            dispatch(filterType(type, name));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
