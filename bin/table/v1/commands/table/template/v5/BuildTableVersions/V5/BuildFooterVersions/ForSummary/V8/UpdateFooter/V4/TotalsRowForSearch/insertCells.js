import updateFooterCell from "./UpdateFooterCell/start.js";

const startFunc = ({
    inVisibleColumnsConfig,
    inTr,
    inData
}) => {
    const rowCells = inTr.querySelectorAll("th[data-column-name]");

    for (const th of rowCells) {

        const columnName =
            th.getAttribute("data-column-name");

        const columnConfig = inVisibleColumnsConfig.find(element => {
            return element.columnName === columnName;
        });

        updateFooterCell({
            inKey: columnName,
            inCellConfig: columnConfig.cellConfig,
            inData,
            inTh: th
        });
    };

};

export { startFunc };