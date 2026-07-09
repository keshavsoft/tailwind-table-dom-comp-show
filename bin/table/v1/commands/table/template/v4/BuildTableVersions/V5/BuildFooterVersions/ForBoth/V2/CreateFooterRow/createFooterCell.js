import inputComponent from "./InputComponent/v2/createInput.js";

const createFooterCell = ({ key, onChangeFunc, showDataList, inColumnsConfig,
    inDefaultValue, inTdClass = "px-4 py-2 border", inAllowOnChange = false, inOnChangeType,
    inOnKeyDown, inOnKeyDownType, inDefaultRow, inType, inRightAlign,
    inWidth, inputClassName, inDataListSource, inDataStore, inDataListFillName,
    inEnterAsTab, inEvalformula, inEvalToControl, inIsNotEmpty }) => {

    let localChangeFunc;

    const td = document.createElement("td");
    td.className = inTdClass;

    if (inAllowOnChange) {
        localChangeFunc = onChangeFunc;
    };

    const input = inputComponent({
        key, inOnKeyDown, inOnKeyDownType, inDataListSource,
        showDataList, inColumnsConfig, inDefaultValue, inOnChangeType,
        inDefaultRow, inType, inRightAlign, inWidth, inputClassName,
        inDataStore, inDataListFillName, inEnterAsTab,
        inEvalformula, inEvalToControl, inIsNotEmpty
    });

    const div = document.createElement("div");
    div.className = "calc-message";

    td.appendChild(input);
    td.appendChild(div);

    return td;
};

export { createFooterCell };