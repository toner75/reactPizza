const initState = {
    pizzas: [],
    loading: true,
    error: null,
    filter: {
        type: "all",
        name: "Все"
    },
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "PIZZAS_REQUESTED":
            return {
                ...initState
            };

        case "PIZZAS_LOADED":
            return {
                
                ...initState,
                pizzas: action.payload,
                loading: false,
            };

        case "PIZZAS_ERROR":
            return {
                ...initState,
                loading: false,
                error: action.payload,
            };

        case "FILTER_TYPE":
            return {
                ...state,
                filter: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
