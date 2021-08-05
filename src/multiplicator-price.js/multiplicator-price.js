const multiplicatorPrice = (price, size) => {
    const multiplicator = (size) => {
        let multi = 1;
        switch (size) {
            case 26:
                multi = 1;
                break;
            case 30:
                multi = 1.5;
                break;
            case 40:
                multi = 2;
                break;
            default:
                break;
        }
        return multi;
    };

    return Math.floor(price * multiplicator(size) * 100) / 100;
};

export default multiplicatorPrice;
