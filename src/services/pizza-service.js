const getPizzas = async () => {
    const res = await fetch("https://api.npoint.io/a1fa631b26cab4b42cf0");
    if (!res.ok) {
        throw new Error("could not fetch");
    }

    const body = await res.json();
    const { pizzas } = body;

    return pizzas;
};

export default getPizzas;
