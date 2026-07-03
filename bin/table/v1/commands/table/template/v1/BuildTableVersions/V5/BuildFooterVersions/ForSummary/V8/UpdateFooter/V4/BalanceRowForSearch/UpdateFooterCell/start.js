import updateTh from "./UpdateTh/index.js";

const startFunc = ({
    inKey,
    inCellConfig = {},
    inData,
    inTh
}) => {
    const evalBalance = inCellConfig?.tableFooter?.evalBalance || "";

    const showBalanceIfPositive =
        inCellConfig?.tableFooter?.showBalanceIfPositive || false;

    const showBalance =
        inCellConfig?.tableFooter?.showBalance || false;

    const showThousandsSeperator =
        inCellConfig?.showThousandsSeperator || false;

    updateTh({
        inKey,
        inShowBalance: showBalance,
        inData,
        inShowThousandsSeperator:
            showThousandsSeperator,
        inEvalBalance: evalBalance,
        inShowBalanceIfPositive: showBalanceIfPositive,
        inTh
    });
};

export default startFunc;