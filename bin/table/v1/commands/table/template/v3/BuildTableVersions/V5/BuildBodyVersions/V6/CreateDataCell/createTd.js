const createTd = ({ inValue, inRightAlign, inWidth, inSearchValue }) => {
    const td = document.createElement("td");

    td.className = "px-4 py-2 border";

    const ksTd = document.createElement("ks-table-body-cell");
    ksTd.ksValue = inValue;
    ksTd.ksRightAlign = inRightAlign;
    ksTd.ksWidth = inWidth;
    ksTd.ksSearchValue = inSearchValue;

    td.appendChild(ksTd);

    return td;

};

export default createTd;