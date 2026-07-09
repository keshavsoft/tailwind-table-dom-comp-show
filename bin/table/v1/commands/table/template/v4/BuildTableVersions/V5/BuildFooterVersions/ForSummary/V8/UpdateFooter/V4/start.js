import totalsRowForSearch from "./TotalsRowForSearch/start.js";
import balanceRowForSearch from "./BalanceRowForSearch/start.js";

const startFunc = ({ inTableFooter, inVisibleColumnsConfig,
    inThSerialClassName, inData, inShowSerial = false,
    inShowTotals = false, inShowBalance = false,
    inShowTotalsForSearch = false, inShowBalanceForSearch = false,
    inShowFooterRows = false
}) => {
    const localTableFooter = inTableFooter;
    const totalsRowForSearchTr = localTableFooter.querySelector(".totalsRowForSearch");
    const balanceRowForSearchTr = localTableFooter.querySelector(".balanceRowForSearch");
    debugger;
    // localTableFooter.innerHTML = "";

    if (inShowFooterRows) {
        if (inShowTotalsForSearch) {
            totalsRowForSearch({
                inVisibleColumnsConfig,
                inThSerialClassName,
                inData, inShowSerial,
                inTr: totalsRowForSearchTr
            });
        };

        if (inShowBalanceForSearch) {
            balanceRowForSearch({
                inVisibleColumnsConfig,
                inThSerialClassName,
                inData, inShowSerial,
                inTr: balanceRowForSearchTr
            });
        };
    };
};

export default startFunc;