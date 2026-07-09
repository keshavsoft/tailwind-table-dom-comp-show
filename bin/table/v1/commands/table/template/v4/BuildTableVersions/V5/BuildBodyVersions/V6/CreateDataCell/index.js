import createTd from "./createTd.js";
import applyWidth from "./applyWidth.js";
import applyRightAlign from "./applyRightAlign.js";
import getDisplayValue from "./getDisplayValue.js";
import setCellContent from "./setCellContent.js";

const createDataCell = ({
    value,
    searchValue,
    inCellConfig = {}
}) => {

    const width =
        inCellConfig.width;
    // console.log("gggggggggg : ", inCellConfig);

    const td = createTd({
        inValue: value, inRightAlign: inCellConfig.rightAlign,
        inWidth: width, inSearchValue: searchValue,
        inShowThousandsSeperator: inCellConfig.showThousandsSeperator
    });

    return td;
};

export default createDataCell;