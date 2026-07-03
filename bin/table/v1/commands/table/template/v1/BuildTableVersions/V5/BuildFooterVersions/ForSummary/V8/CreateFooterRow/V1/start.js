import totalsRow from "./TotalsRow/start.js";
import balanceRow from "./BalanceRow/start.js";

const startFunc = ({ inContainerEl, inDom, options, inVisibleColumnsConfig,
    inTrClassName, inThSerialClassName, inData, inShowSerial,
    inShowTotals = false, inShowBalance = false }) => {

    const containerEl = inContainerEl;

    const localTableFooter =
        inDom.getTableFooter(inContainerEl);

    localTableFooter.innerHTML = "";

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