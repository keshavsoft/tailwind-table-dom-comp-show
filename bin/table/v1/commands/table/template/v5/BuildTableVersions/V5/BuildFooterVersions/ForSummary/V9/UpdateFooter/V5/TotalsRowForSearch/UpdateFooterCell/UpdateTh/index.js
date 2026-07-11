import getTotal from "./getTotal.js";
import getFormattedTotal from "./getFormattedTotal.js";

const createTH = ({
    inKey,
    inShowTotal = false,
    inData,
    inShowThousandsSeperator = false,
    inTh
}) => {
    const th = inTh;

    if (inShowTotal) {
        const total = getTotal({
            inData,
            inKey
        });

        const formattedTotal =
            getFormattedTotal({
                inTotal: total,
                inShowThousandsSeperator
            });

        th.innerHTML = formattedTotal;
    };
};

export default createTH;