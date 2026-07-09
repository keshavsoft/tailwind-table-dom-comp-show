import updateTh from "./UpdateTh/index.js";

const startFunc = ({
    inKey,
    inCellConfig = {},
    inData,
    inTh
}) => {
    const showTotal =
        inCellConfig?.tableFooter?.showTotal || false;

    const showThousandsSeperator =
        inCellConfig?.showThousandsSeperator || false;

    updateTh({
        inKey,
        inShowTotal: showTotal,
        inData,
        inShowThousandsSeperator: showThousandsSeperator,
        inTh
    });
};

export default startFunc;