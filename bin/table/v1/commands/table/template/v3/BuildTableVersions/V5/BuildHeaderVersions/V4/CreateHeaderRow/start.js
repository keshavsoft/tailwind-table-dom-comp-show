import insertCells from "./insertCells.js";

const startFunc = ({ inShowSerial = false, inThClassName, inTrClassName,
    inThSerialClassName, inShowActions = false, inVisibleColumnsConfig,
    inSerialWidth, inOptionsWidth
}) => {
    const tr = document.createElement("tr");
    const thSerialClassName = inThSerialClassName;

    if (inTrClassName) {
        tr.className = inTrClassName;
    };

    if (inShowSerial) tr.appendChild(getSerialColumn({
        inClassName: thSerialClassName,
        inWidth: inSerialWidth
    }));

    insertCells({
        tr,
        inClassName: inThClassName,
        inVisibleColumnsConfig
    });

    if (inShowActions) {
        tr.appendChild(getOptionsColumn({ inWidth: inOptionsWidth }));
    };

    return tr;
};

const getSerialColumn = ({ inClassName, inWidth }) => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "#";

    if (inClassName) {
        thIndex.className = inClassName;
    } else {
        thIndex.className = "px-4 py-2 border";
    };

    thIndex.style.width = inWidth || "50px";

    return thIndex
};

const getOptionsColumn = ({ inWidth }) => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "options";
    thIndex.style.width = inWidth || "50px";

    return thIndex
};

export { startFunc };
