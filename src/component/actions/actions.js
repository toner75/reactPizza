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

export {
    pizzasLoaded,
    pizzasRequested,
    pizzasError
};