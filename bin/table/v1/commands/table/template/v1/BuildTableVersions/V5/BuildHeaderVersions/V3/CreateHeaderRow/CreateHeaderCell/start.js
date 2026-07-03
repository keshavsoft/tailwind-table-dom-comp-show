import { createTH } from "./createTH.js";
import { createWrapper } from "./createWrapper.js";

const createHeaderCell = ({ inKey, inClassName, inWidth, inCreateWrapper = false }) => {
    const th = createTH({
        inKey,
        inClassName,
        inWidth
    });

    if (inCreateWrapper) {
        const wrapper = createWrapper(inKey);

        // attach to TH
        th.appendChild(wrapper);
    } else {
        th.innerHTML = inKey;
    }

    return th;
};

export default createHeaderCell;