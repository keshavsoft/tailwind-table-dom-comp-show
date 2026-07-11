import totalsRow from "./TotalsRow/start.js";
import balanceRow from "./BalanceRow/start.js";
import totalsRowForSearch from "./TotalsRowForSearch/start.js";
import balanceRowForSearch from "./BalanceRowForSearch/start.js";

const startFunc = ({ inVisibleColumnsConfig,
    inThSerialClassName, inData, inShowSerial = false,
    inShowTotals = false, inShowBalance = false,
    inShowTotalsForSearch = false, inShowBalanceForSearch = false,
    inShowFooterRows = false, inShowActions
}) => {
    let returnArrayOfTrs = [];

    if (inShowFooterRows) {
        if (inShowTotalsForSearch) {
            const tr = totalsRowForSearch({
                inVisibleColumnsConfig,
                inThSerialClassName,
                inData, inShowSerial
            });

            returnArrayOfTrs.push(tr);
        };

        if (inShowBalanceForSearch) {
            const tr = balanceRowForSearch({
                inVisibleColumnsConfig,
                inThSerialClassName,
                inData, inShowSerial
            });

            returnArrayOfTrs.push(tr);
        };
    };

    if (inShowTotals) {
        const tr = totalsRow({
            inVisibleColumnsConfig,
            inThSerialClassName,
            inData, inShowSerial, inShowActions
        });
        // console.log("inShowTotals : ", inShowTotals, tr);

        returnArrayOfTrs.push(tr);
    };

    if (inShowBalance) {
        const tr = balanceRow({
            inVisibleColumnsConfig,
            inThSerialClassName,
            inData, inShowSerial
        });

        returnArrayOfTrs.push(tr);
    };

    return returnArrayOfTrs;
};

export default startFunc;