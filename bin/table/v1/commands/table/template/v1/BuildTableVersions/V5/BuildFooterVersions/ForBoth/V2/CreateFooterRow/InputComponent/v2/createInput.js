const createInput = ({
    inType = "text",
    key, inDataStore,
    className, inputClassName,
    inOnKeyDown, inColumnsConfig, inOnChangeType,
    inOnKeyDownType, showDataList, onChangeFunc, inRightAlign,
    inWidth, inDataListSource, inDataListFillName, inEnterAsTab,
    inEvalformula, inEvalToControl, inIsNotEmpty
} = {}) => {

    let input = document.createElement("ks-table-footer-input");

    // if (inType === "number") {
    //     input = document.createElement("ks-table-footer-input");
    // } else {
    //     // input = document.createElement("ks-table-footer-input-dl");
    //     input = document.createElement("ks-table-footer-input");
    // };

    input.ksType = inType;
    input.ksPlaceholder = key;
    input.ksName = key;
    input.ksClassName = className;

    input.ksInputClassName = inputClassName;

    input.ksOnKeyDown = inOnKeyDown;
    // input.ksOnKeyDownType = inOnKeyDownType;
    input.ksShowDataList = showDataList;
    input.ksInColumnsConfig = inColumnsConfig;

    // input.ksOnChangeFunc = onChangeFunc;
    input.ksOnChangeType = inOnChangeType;

    input.ksRightAlign = inRightAlign;
    input.ksWidth = inWidth;
    input.dataStore = inDataStore;

    input.setAttribute("ksDataListSource", inDataListSource);
    input.setAttribute("ksDataListFillName", inDataListFillName);
    input.setAttribute("onKeyDownType", inOnKeyDownType);
    input.setAttribute("type", inType);
    input.setAttribute("isNotEmpty", inIsNotEmpty);

    if (inEnterAsTab) input.setAttribute("enterAsTab", inEnterAsTab);

    if (inEvalformula) input.setAttribute("evalformula", inEvalformula);

    if (inEvalToControl) input.setAttribute("evalToControl", inEvalToControl);

    return input;
};

export default createInput;
