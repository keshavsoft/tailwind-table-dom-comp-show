import createInput from "./createInput.js";
import applyDataList from "./applyDataList.js";
import applyDefaultValue from "./applyDefaultValue.js";
import attachChangeEvent from "./attachChangeEvent.js";
import attachKeyDownEvent from "./AttachKeyDownEvent/v2/start.js";

const createFooterInput = (args) => {
    const {
        key, inType,
        onChangeFunc,
        showDataList,
        inColumnsConfig,
        inDefaultValue,
        inOnChangeType,
        inOnKeyDown,
        inOnKeyDownType,
        inDefaultRow, inRightAlign, inWidth
    } = args;

    const input = createInput({
        key, inOnKeyDown, inOnKeyDownType, inOnChangeType,
        showDataList, inColumnsConfig, onChangeFunc, inType, inRightAlign,
        inWidth
    });

    // if (inOnChangeType) {
    //     input.dataset.onChangeType = inOnChangeType;
    // }

    // applyDataList({
    //     input,
    //     key,
    //     showDataList,
    //     inColumnsConfig
    // });

    // applyDefaultValue({
    //     input,
    //     inDefaultValue
    // });

    // attachChangeEvent({
    //     input,
    //     onChangeFunc
    // });

    // attachKeyDownEvent({
    //     input,
    //     inOnKeyDown,
    //     inOnKeyDownType,
    //     inDefaultRow
    // });

    return input;
};

export default createFooterInput;