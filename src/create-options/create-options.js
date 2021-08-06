const createOptions = (arrData, storeData, groupName) => {
    let dFlag = false;
    let defCheck = false;

    const elements = arrData.map(({ name, value }) => {
        if (storeData.find((storeValue) => storeValue === value)) {
            if (!dFlag) {
                defCheck = true;
                dFlag = true;
            } else {
                defCheck = false;
            }

            return (
                <label key={value}>
                    <input
                        type="radio"
                        name={groupName}
                        value={value}
                        defaultChecked={defCheck}
                    />
                    <div className="pizza-options__name">{name}</div>
                </label>
            );
        } else
            return (
                <label key={value}>
                    <div className="pizza-options__name not-supported">
                        {name}
                    </div>
                </label>
            );
    });

    return elements;
};

export default createOptions;
