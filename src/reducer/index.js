const initState = {
    pizzas: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "PIZZAS_LOADED":
            return {
                pizzas: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
