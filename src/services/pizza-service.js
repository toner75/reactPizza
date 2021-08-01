const getPizzas = async () => {
    const res = await fetch("http://localhost:3000/db.json");
    if (!res.ok) {
        throw new Error("could not fetch");
    }

    const body = await res.json();
    const { pizzas } = body;

    return pizzas;
};

export default getPizzas;
