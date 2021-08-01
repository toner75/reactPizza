const pizzasLoaded = (items) => {
    return {
        type: "PIZZAS_LOADED",
        payload: items,
    };
};

export {pizzasLoaded};