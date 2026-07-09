import totalsRow from "./TotalsRow/start.js";
import balanceRow from "./BalanceRow/start.js";
import totalsRowForSearch from "./TotalsRowForSearch/start.js";
import balanceRowForSearch from "./BalanceRowForSearch/start.js";

const startFunc = ({ inTableFooter, inVisibleColumnsConfig,
    inThSerialClassName, inData, inShowSerial = false,
    inShowTotals = false, inShowBalance = false,
    inShowTotalsForSearch = false, inShowBalanceForSearch = false,
    inShowFooterRows = false
}) => {
    const localTableFooter = inTableFooter;

    localTableFooter.innerHTML = "";

    if (inShowFooterRows) {
        if (inShowTotalsForSearch) {
            const tr = totalsRowForSearch({
                inVisibleColumnsConfig,
                inThSerialClassName,
                inData, inShowSerial
            });

            localTableFooter.appendChild(tr);
        };

        if (inShowBalanceForSearch) {
            const tr = balanceRowForSearch({
                inVisibleColumnsConfig,
                inThSerialClassName,
                inData, inShowSerial
            });

            localTableFooter.appendChild(tr);
        };
    };

    if (inShowTotals) {
        const tr = totalsRow({
            inVisibleColumnsConfig,
            inThSerialClassName,
            inData, inShowSerial
        });
        // debugger;

        localTableFooter.appendChild(tr);
    };

    if (inShowBalance) {
        const tr = balanceRow({
            inVisibleColumnsConfig,
            inThSerialClassName,
            inData, inShowSerial
        });

        localTableFooter.appendChild(tr);
    };
};

export default startFunc;