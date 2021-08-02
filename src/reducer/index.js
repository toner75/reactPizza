const initState = {
    pizzas: [],
    loading: true,
    error: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "PIZZAS_REQUESTED":
            return {
                pizzas: [],
                loading: true,
                error: null,
            };

        case "PIZZAS_LOADED":
            return {
                pizzas: action.payload,
                loading: false,
                error: null,
            };

        case "PIZZAS_ERROR":
            return {
                pizzas: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
