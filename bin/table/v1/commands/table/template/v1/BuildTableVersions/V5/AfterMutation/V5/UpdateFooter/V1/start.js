import totalsRowForSearch from "./TotalsRowForSearch/start.js";
import balanceRowForSearch from "./BalanceRowForSearch/start.js";

const startFunc = ({ inTableFooter,
    inThSerialClassName, inData, inShowSerial = false,
    inShowTotals = false, inShowBalance = false,
    inShowFooterRows = false
}) => {
    const localTableFooter = inTableFooter;
    const totalsRowTr = localTableFooter.querySelector(".totalsRow");
    const balanceRowTr = localTableFooter.querySelector(".balanceRow");
    // console.log("vvvvvvv : ", inShowFooterRows, inShowTotals);

    if (inShowFooterRows) {
        if (inShowTotals) {
            totalsRowForSearch({
                inThSerialClassName,
                inData, inShowSerial,
                inTr: totalsRowTr
            });
        };

        // if (inShowBalance) {
        //     balanceRowForSearch({
        //         inVisibleColumnsConfig,
        //         inThSerialClassName,
        //         inData, inShowSerial,
        //         inTr: balanceRowTr
        //     });
        // };
    };
};

export default startFunc;