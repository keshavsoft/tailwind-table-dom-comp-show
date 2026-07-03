// import { createInputComponent } from "../../../../../../../../components/v2/input.js";

const createInput = ({
    inType = "text",
    key,
    className,
    inOnKeyDown, inColumnsConfig, inOnChangeType,
    inOnKeyDownType, showDataList, onChangeFunc, inRightAlign,
    inWidth
} = {}) => {
    const input = document.createElement("ks-table-footer-input");

    input.ksType = inType;
    input.ksPlaceholder = key;
    input.ksName = key;
    input.ksClassName = className;

    input.ksOnKeyDown = inOnKeyDown;
    input.ksOnKeyDownType = inOnKeyDownType;
    input.ksShowDataList = showDataList;
    input.ksInColumnsConfig = inColumnsConfig;

    input.ksOnChangeFunc = onChangeFunc;
    input.ksOnChangeType = inOnChangeType;

    input.ksRightAlign = inRightAlign;
    input.ksWidth = inWidth;

    // console.log("1111111111 : ", input, inOnKeyDown, inOnKeyDownType);
    return input;
};

// const createInput = ({ key }) => {
//     return createInputComponent({
//         type: "text",
//         placeholder: key,
//         name: key,
//         className: "w-full px-2 py-1 border rounded text-md"
//     });
// };

export default createInput;
