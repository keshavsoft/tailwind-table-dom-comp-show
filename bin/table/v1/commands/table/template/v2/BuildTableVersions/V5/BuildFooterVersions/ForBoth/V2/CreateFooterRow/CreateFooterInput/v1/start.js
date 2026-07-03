import createInput from "./createInput.js";
import applyDataList from "./applyDataList.js";
import applyDefaultValue from "./applyDefaultValue.js";
import attachChangeEvent from "./attachChangeEvent.js";
// import attachKeyDownEvent from "./attachKeyDownEvent.js";
import attachKeyDownEvent from "./AttachKeyDownEvent/start.js";

const createFooterInput = (args) => {
    const {
        key,
        onChangeFunc,
        showDataList,
        inColumnsConfig,
        inDefaultValue,
        inOnChangeType,
        inOnKeyDown,
        inOnKeyDownType
    } = args;

    const input = createInput({ key });

    if (inOnChangeType) {
        input.dataset.onChangeType = inOnChangeType;
    }

    applyDataList({
        input,
        key,
        showDataList,
        inColumnsConfig
    });

    applyDefaultValue({
        input,
        inDefaultValue
    });

    attachChangeEvent({
        input,
        onChangeFunc
    });

    attachKeyDownEvent({
        input,
        inOnKeyDown,
        inOnKeyDownType
    });

    return input;
};

export default createFooterInput;