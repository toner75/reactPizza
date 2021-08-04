const renderOptions = (arrData, storeData, groupName) => {
    let dFlag = false;
    let activeClass;
    let defCheck;

    const elements = arrData.map(({ name, value }) => {
        if (storeData.find((storeValue) => storeValue === value)) {
            if (!dFlag) {
                activeClass = "active";
                defCheck = true;
                dFlag = true;
            } else {
                activeClass = "";
                defCheck = false;
            }

            return (
                <label key={value} className={activeClass}>
                    <input
                        type="radio"
                        name={groupName}
                        value={value}
                        defaultChecked={defCheck}
                    />
                    <span className="pizza-options__name">{name}</span>
                </label>
            );
        } else
            return (
                <label key={value} className="not-supported">
                    <span className="pizza-options__name">{name}</span>
                </label>
            );
    });

    return elements;
};

export default renderOptions;
