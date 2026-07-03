import updateTh from "./UpdateTh/index.js";

const startFunc = ({
    inKey,
    inData,
    inTh,
    inShowTotal = false,
    inShowThousandsSeperator = false
}) => {
    const showTotal = inShowTotal;

    const showThousandsSeperator = inShowThousandsSeperator;

    updateTh({
        inKey,
        inShowTotal: showTotal,
        inData,
        inShowThousandsSeperator: showThousandsSeperator,
        inTh
    });
};

export default startFunc;