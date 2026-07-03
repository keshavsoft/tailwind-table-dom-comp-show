import createTH from "./CreateTH/index.js";

const startFunc = ({
    inKey,
    inCellConfig = {},
    inData
}) => {

    const showTotal =
        inCellConfig?.tableFooter?.showTotal || false;

    const rightAlign =
        inCellConfig?.rightAlign || false;

    const showThousandsSeperator =
        inCellConfig?.showThousandsSeperator || false;

    const width =
        inCellConfig?.width;

    const th = createTH({
        inKey,
        inShowTotal: showTotal,
        inData,
        inShowThousandsSeperator:
            showThousandsSeperator,
        inWidth: width,
        inRightAlign: rightAlign
    });

    return th;

};

export default startFunc;