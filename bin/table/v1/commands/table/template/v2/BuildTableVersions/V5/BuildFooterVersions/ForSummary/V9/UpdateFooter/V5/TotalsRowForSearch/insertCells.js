import updateFooterCell from "./UpdateFooterCell/start.js";

const startFunc = ({
    inTr,
    inData
}) => {
    const rowCells = inTr.querySelectorAll("th[data-column-name]");
    // debugger;
    for (const th of rowCells) {

        const columnName =
            th.getAttribute("data-column-name");

        const showTotal = th.getAttribute("data-show-total");
        const showThousandsSeperator = th.getAttribute("data-show-thousands-seperator");

        updateFooterCell({
            inKey: columnName,
            inData,
            inTh: th, inShowTotal: showTotal === "true",
            inShowThousandsSeperator: showThousandsSeperator === "true"
        });
    };

};

export { startFunc };