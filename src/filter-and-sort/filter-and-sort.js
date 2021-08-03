const filterAndSort = (pizzas, filter, sort) => {

    const pizzaCategory = pizzas.filter(({ category }) => {
        return filter.type === "all" || filter.type === category;
    });

    const pizzaSort = (arr, type) => {
        const sortAlphabet = (a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        };
        const sortLowPrice = (a, b) => a.price - b.price;
        const sortHighPrice = (a, b) => b.price - a.price;
        const sortPopular = (a, b) => b.rating - a.rating;

        let newPizzas;

        switch (type) {
            case "популярные":
                return (newPizzas = arr.sort(sortPopular));

            case "дешевые":
                return (newPizzas = arr.sort(sortLowPrice));

            case "дорогие":
                return (newPizzas = arr.sort(sortHighPrice));

            case "по алфавиту":
                return (newPizzas = arr.sort(sortAlphabet));

            default:
                break;
        }

        return newPizzas;
    };

    return pizzaSort(pizzaCategory, sort);
};

export default filterAndSort;
