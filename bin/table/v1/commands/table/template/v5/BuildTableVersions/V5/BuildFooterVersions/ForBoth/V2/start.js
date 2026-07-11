import forSummary from "../../ForSummary/V9/CreateFooterRow/V4/start.js";

const buildFooter = ({ inVisibleColumnsConfig,
    inTableFooter, inOptions, inData
}) => {
    const showAggregateRows = inOptions.showAggregateRows;
    const showTotals = inOptions.showTotals;
    const showBalance = inOptions.showBalance;

    const localVisibleColumns = inVisibleColumnsConfig

    const oldShowActions = inTableFooter.getAttribute("ks-showActions");
    const oldShowSerial = inTableFooter.getAttribute("ks-showSerial");

    if (showAggregateRows) {
        const forSummaryTr = forSummary({
            inVisibleColumnsConfig: localVisibleColumns,
            inThSerialClassName: "", inData,
            inShowTotals: showTotals, inShowBalance: showBalance,
            inShowSerial: oldShowSerial,
            inShowActions: oldShowActions
        });
        // debugger;

        forSummaryTr.forEach(element => {
            inTableFooter.appendChild(element);
        });
    };

};

export default buildFooter;