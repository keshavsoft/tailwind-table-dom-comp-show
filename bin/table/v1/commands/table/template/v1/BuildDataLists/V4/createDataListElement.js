const createDataListElement = ({ columnName, values }) => {
    const datalist = document.createElement("datalist");
    datalist.id = `${columnName}List`;

    datalist.innerHTML = values
        .map(value => `<option value="${value}">`)
        .join("");

    return datalist;
};

export default createDataListElement;
