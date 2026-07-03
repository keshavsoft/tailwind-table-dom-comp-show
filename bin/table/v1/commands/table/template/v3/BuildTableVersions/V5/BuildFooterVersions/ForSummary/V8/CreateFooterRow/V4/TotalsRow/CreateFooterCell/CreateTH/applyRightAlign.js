const applyRightAlign = ({
    inTh,
    inRightAlign = false
}) => {
    if (inRightAlign) {
        inTh.classList.add("text-right");
    };
};

export default applyRightAlign;