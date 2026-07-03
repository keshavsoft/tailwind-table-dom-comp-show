import createFooterCell from "./CreateFooterCell/start.js";

const startFunc = ({ inVisibleColumnsConfig, tr, inData }) => {
    for (const [key, value] of Object.entries(inVisibleColumnsConfig)) {
        tr.appendChild(createFooterCell({
            inKey: value.columnName,
            inCellConfig: value.cellConfig,
            inData
        }));
    };
};

export { startFunc };