import { createTH } from "./createTH.js";
import { createWrapper } from "./createWrapper.js";

const createHeaderCell = ({ inKey, inClassName, inWidth, inCreateWrapper = false,
    inTitle
}) => {
    
    const th = createTH({
        inKey,
        inClassName,
        inWidth,
        inTitle
    });

    if (inCreateWrapper) {
        const wrapper = createWrapper(inKey);

        // attach to TH
        th.appendChild(wrapper);
    } else {
        th.innerHTML = inTitle;
        th.dataset.field = inKey;
    };

    return th;
};

export default createHeaderCell;