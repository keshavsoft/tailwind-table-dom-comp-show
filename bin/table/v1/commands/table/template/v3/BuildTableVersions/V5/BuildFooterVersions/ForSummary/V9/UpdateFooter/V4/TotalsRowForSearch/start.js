import { startFunc as insertRowCells } from "./insertCells.js";

const startFunc = ({ inShowSerial = false, inVisibleColumnsConfig,
    inTrClassName = "totalsRowForSearch",
    inThSerialClassName, inShowActions = false, inData,
    inTr
}) => {
    const tr = inTr;

    // if (inShowSerial) tr.appendChild(getSerialColumn({ inClassName: thSerialClassName }));

    insertRowCells({
        inTr: tr, inVisibleColumnsConfig, inData
    });
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
