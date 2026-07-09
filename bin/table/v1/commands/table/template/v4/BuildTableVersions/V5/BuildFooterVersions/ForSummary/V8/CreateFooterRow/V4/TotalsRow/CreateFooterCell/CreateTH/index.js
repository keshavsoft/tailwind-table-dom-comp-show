import applyWidth from "./applyWidth.js";
import getTotal from "./getTotal.js";
import getFormattedTotal from "./getFormattedTotal.js";
import applyRightAlign from "./applyRightAlign.js";

const createTH = ({
    inKey,
    inShowTotal = false,
    inData,
    inShowThousandsSeperator = false,
    inWidth,
    inRightAlign
}) => {

    const th = document.createElement("th");
    th.className = "px-4 py-2 border";
    th.dataset.columnName = inKey;
    th.dataset.showTotal = inShowTotal;
    th.dataset.showThousandsSeperator = inShowThousandsSeperator;

    applyWidth({
        th,
        inWidth
    });

    applyRightAlign({
        inTh: th,
        inRightAlign
    });

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

    return th;
};

export default createTH;