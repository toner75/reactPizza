const initState = {
    pizzas: [],
    selectedPizzas: [],
    loading: true,
    error: null,
    filter: {
        type: "all",
        name: "Все",
    },
    dropdown: false,
    sort: "популярные",
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "PIZZAS_REQUESTED":
            return {
                ...state,
            };

        case "PIZZAS_LOADED":
            return {
                ...state,
                pizzas: action.payload,
                loading: false,
            };

        case "PIZZAS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case "FILTER_TYPE":
            return {
                ...state,
                filter: action.payload,
            };

        case "DROPDOWN_ON":
            return {
                ...state,
                dropdown: true,
            };

        case "DROPDOWN_OFF":
            return {
                ...state,
                dropdown: false,
            };

        case "SORT_TYPE":
            return {
                ...state,
                sort: action.payload,
            };

        case "PIZZAS_UPDATE":
            return {
                ...state,
                pizzas: action.payload,
            };

        case "SELECTING_PIZZA":
            return {
                ...state,
                selectedPizzas: action.payload,
            };

        case "PIZZA_ADD":
            return {
                ...state,
                pizzas: action.payload,
            };

        case "CLEAR_CART":
            return {
                ...state,
                selectedPizzas: []
            };

        default:
            return state;
    }
};

export default reducer;
