import totalsRow from "./TotalsRow/start.js";
import balanceRow from "./BalanceRow/start.js";
import totalsRowForSearch from "./TotalsRowForSearch/start.js";
import balanceRowForSearch from "./BalanceRowForSearch/start.js";

const startFunc = ({ inContainerEl, inDom, options, inVisibleColumnsConfig,
    inTrClassName, inThSerialClassName, inData, inShowSerial,
    inShowTotals = false, inShowBalance = false,
    inShowTotalsForSearch = false, inShowBalanceForSearch = false,
    inShowFooterRows = false
}) => {
    debugger
    const containerEl = inContainerEl;

    const localTableFooter =
        inDom.getTableFooter(inContainerEl);

    localTableFooter.innerHTML = "";

    if (inShowFooterRows) {

        if (inShowTotalsForSearch) {
            const tr = totalsRowForSearch({
                options, inVisibleColumnsConfig,
                inTrClassName, inThSerialClassName,
                inData, inShowSerial
            });
            // debugger;

            localTableFooter.appendChild(tr);
        };

        if (inShowBalanceForSearch) {
            const tr = balanceRowForSearch({
                options, inVisibleColumnsConfig,
                inTrClassName, inThSerialClassName,
                inData, inShowSerial
            });

            localTableFooter.appendChild(tr);
        };

    };

    if (inShowTotals) {
        const tr = totalsRow({
            options, inVisibleColumnsConfig,
            inTrClassName, inThSerialClassName,
            inData, inShowSerial
        });
        // debugger;

        localTableFooter.appendChild(tr);
    };

    if (inShowBalance) {
        const tr = balanceRow({
            options, inVisibleColumnsConfig,
            inTrClassName, inThSerialClassName,
            inData, inShowSerial
        });

        localTableFooter.appendChild(tr);
    };
};

export default startFunc;