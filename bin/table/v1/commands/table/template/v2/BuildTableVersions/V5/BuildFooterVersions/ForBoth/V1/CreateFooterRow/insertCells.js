import { createFooterCell } from "./createFooterCell.js";

const startFunc = ({ keys, tr, options = {}, inDefaultRow,
    inShowDataList, onChangeFunc, inVisibleColumnsConfig,
    inDataStore }) => {

    const defaultRow = inDefaultRow;

    inVisibleColumnsConfig.forEach(loopColumn => {
        const defaultValue = defaultRow ? defaultRow[loopColumn.columnName] : "";
        // console.log("loopColumn-------- : ", loopColumn);

        const createdFooterCell = createFooterCell({
            key: loopColumn.columnName,
            inDefaultValue: defaultValue,
            onChangeFunc,
            showDataList: inShowDataList,
            inColumnsConfig: options.inColumnsConfig,
            inTdClass: loopColumn?.cellConfig?.tdClass,
            inAllowOnChange: loopColumn.allowOnChange,
            inOnChangeType: loopColumn.onChangeType,
            inOnKeyDown: loopColumn?.onKeyDown,
            inDefaultRow: defaultRow,
            inType: loopColumn.type,
            inRightAlign: loopColumn?.cellConfig?.rightAlign,
            inWidth: loopColumn?.cellConfig?.width,
            inputClassName: loopColumn?.cellConfig?.uiClasses?.table?.tfoot?.inputClass,
            inDataListSource: loopColumn?.dataListSource,
            inDataStore,
            inDataListFillName: loopColumn?.dataListFillName,
            inOnKeyDownType: loopColumn?.verticalConfig?.onKeyDownType,
            inEnterAsTab: loopColumn?.tableConfig?.footerConfig?.enterAsTab,
            inEvalformula: loopColumn?.tableConfig?.footerConfig?.evalformula,
            inEvalToControl: loopColumn?.tableConfig?.footerConfig?.evalToControl
        });

        tr.appendChild(createdFooterCell);
    });

};

export { startFunc };
