import createTH from "./CreateTH/index.js";

const startFunc = ({
    inKey,
    inCellConfig = {},
    inData
}) => {
    const evalBalance = inCellConfig?.tableFooter?.evalBalance || "";

    const showBalanceIfPositive =
        inCellConfig?.tableFooter?.showBalanceIfPositive || false;

    const showBalance =
        inCellConfig?.tableFooter?.showBalance || false;

    const rightAlign =
        inCellConfig?.rightAlign || false;

    const showThousandsSeperator =
        inCellConfig?.showThousandsSeperator || false;

    const width =
        inCellConfig?.width;

    const th = createTH({
        inKey,
        inShowBalance: showBalance,
        inData,
        inShowThousandsSeperator:
            showThousandsSeperator,
        inWidth: width,
        inRightAlign: rightAlign,
        inEvalBalance: evalBalance,
        inShowBalanceIfPositive: showBalanceIfPositive
    });

    return th;

};

export default startFunc;