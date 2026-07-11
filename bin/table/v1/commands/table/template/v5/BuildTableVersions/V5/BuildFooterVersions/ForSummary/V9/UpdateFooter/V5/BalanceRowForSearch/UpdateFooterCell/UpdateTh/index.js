import getFormattedTotal from "./getFormattedTotal.js";

const getTotal = ({
    inData,
    inKey,
    inEvalBalance
}) => {

    // normal total
    if (!inEvalBalance) {

        return inData.reduce((acc, row) => {
            return acc + Number(row[inKey] || 0);
        }, 0);

    };

    // eval string total
    const expression = inEvalBalance
        .split("-")
        .map(key => {

            const total = inData.reduce((acc, row) => {
                return acc + Number(row[key] || 0);
            }, 0);

            return total;

        })
        .join("-");

    return eval(expression);
};

const updateTh = ({
    inKey,
    inShowBalance = false,
    inData,
    inShowThousandsSeperator = false,
    inEvalBalance,
    inShowBalanceIfPositive,
    inTh
}) => {
    if (inShowBalance || inShowBalanceIfPositive) {
        const total = getTotal({
            inData,
            inKey,
            inEvalBalance
        });

        if (inShowBalanceIfPositive && total < 0) {
            inTh.innerHTML = "";
            return;
        };

        const formattedTotal =
            getFormattedTotal({
                inTotal: total,
                inShowThousandsSeperator
            });

        inTh.innerHTML = formattedTotal;
    };
};

export default updateTh;