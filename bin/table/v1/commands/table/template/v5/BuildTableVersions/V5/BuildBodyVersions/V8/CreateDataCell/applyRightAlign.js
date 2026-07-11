const applyRightAlign = ({
    td,
    inCellConfig = {}
}) => {

    const rightAlign =
        inCellConfig.rightAlign || false;

    if (rightAlign) {
        td.classList.add("text-right");
    };

};

export default applyRightAlign;