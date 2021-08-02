const pizzasRequested = () => {
    return {
        type: "PIZZAS_REQUESTED"
    }
}

const pizzasLoaded = (items) => {
    return {
        type: "PIZZAS_LOADED",
        payload: items,
    };
};

const pizzasError = (err) => {
    return {
        type: "PIZZAS_ERROR",
        payload: err
    }
}

const filterType = (type, name) => {
    return {
        type: "FILTER_TYPE",
        payload: {type, name}
    }
}

const dropdownOn = () => {
    return {
        type: "DROPDOWN_ON"
    }
}

const dropdownOff = () => {
    return {
        type: "DROPDOWN_OFF"
    }
}

const sortType = (type) => {
    return {
        type: "SORT_TYPE",
        payload: type
    }
}

export {
    pizzasLoaded,
    pizzasRequested,
    pizzasError,
    filterType,
    dropdownOn,
    dropdownOff,
    sortType
};