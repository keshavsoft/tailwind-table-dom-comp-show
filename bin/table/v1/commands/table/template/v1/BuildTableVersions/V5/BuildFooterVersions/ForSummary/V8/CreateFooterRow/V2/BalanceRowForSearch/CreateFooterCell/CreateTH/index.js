import applyWidth from "./applyWidth.js";
import getTotal1 from "./getTotal.js";
import getFormattedTotal from "./getFormattedTotal.js";
import applyRightAlign from "./applyRightAlign.js";

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

const createTH = ({
    inKey,
    inShowBalance = false,
    inData,
    inShowThousandsSeperator = false,
    inWidth,
    inRightAlign,
    inEvalBalance,
    inShowBalanceIfPositive
}) => {
    // debugger;
    // const k1 = getTotal1({ inData, inKey, inEvalBalance });

    const th = document.createElement("th");
    th.className = "px-4 py-2 border";

    applyWidth({
        th,
        inWidth
    });

    applyRightAlign({
        inTh: th,
        inRightAlign
    });

    if (inShowBalance || inShowBalanceIfPositive) {

        const total = getTotal({
            inData,
            inKey,
            inEvalBalance
        });

        if (inShowBalanceIfPositive && total < 0) {
            return th;
        }

        const formattedTotal =
            getFormattedTotal({
                inTotal: total,
                inShowThousandsSeperator
            });

        th.innerHTML = formattedTotal;
    };

    // if (inShowBalance && inShowBalanceIfPositive) {
    //     const total = getTotal({ inData, inKey, inEvalBalance });

    //     const formattedTotal =
    //         getFormattedTotal({
    //             inTotal: total,
    //             inShowThousandsSeperator
    //         });

    //     th.innerHTML = formattedTotal;

    // };

    return th;
};

export default createTH;