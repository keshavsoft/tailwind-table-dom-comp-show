import { startFunc as insertRowCells } from "./insertCells.js";

const startFunc = ({ inShowSerial = false, inVisibleColumnsConfig, inTrClassName = "totalsRowForSearch",
    inThSerialClassName, inShowActions = false, inData
}) => {
    const tr = document.createElement("tr");
    const thSerialClassName = inThSerialClassName;

    if (inTrClassName) {
        tr.className = inTrClassName;
    };

    if (inShowSerial) tr.appendChild(getSerialColumn({ inClassName: thSerialClassName }));

    insertRowCells({
        tr, inVisibleColumnsConfig, inData
    });

    if (inShowActions) {
        tr.appendChild(getOptionsColumn());
    };

    return tr;
};

const getSerialColumn = ({ inClassName }) => {
    const thIndex = document.createElement("th");
    // thIndex.textContent = "#";

    if (inClassName) {
        thIndex.className = inClassName;
    } else {
        thIndex.className = "px-4 py-2 border";
    };
    // thIndex.className = "px-4 py-2 border";

    return thIndex
};

const getOptionsColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "options";

    return thIndex
};

export default startFunc;
