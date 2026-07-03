import { startFunc as createHandleSave } from "./CreateHandleSave/start.js";
import createHandleOnChange from "./CreateHandleOnChange/V2/start.js";

import { startFunc as createFooter } from "./CreateFooter/start.js";
// import forSummary from "../../ForSummary/V8/CreateFooterRow/V4/start.js";

import forSummary from "../../ForSummary/V9/CreateFooterRow/V4/start.js";

const buildFooter = ({ inVisibleColumnsConfig, inDefaultRow, keys,
    inTableFooter, inShowDataList, inDataStore, inOptions,
    inServices, inEndPoints, inTableBody,
    inData, inToSaveRow
}) => {
    // debugger;
    const createNewRow = inOptions.createNewRow;
    const showAggregateRows = inOptions.showAggregateRows;
    const showTotals = inOptions.showTotals;
    const showBalance = inOptions.showBalance;
    // console.log("inOptions : ", inOptions);

    const localVisibleColumns = inVisibleColumnsConfig

    const oldShowActions = inTableFooter.getAttribute("ks-showActions");
    const oldShowSerial = inTableFooter.getAttribute("ks-showSerial");

    const localHandleSave = ({ dataFromDom, inCurrentTarget }) => {
        const objectToSave = { ...inToSaveRow, ...dataFromDom, ...inDefaultRow };
        // console.log("objectToSave : ", inToSaveRow, objectToSave);

        createHandleSave({
            inServices, inEndPoints, inPayload: objectToSave,
            inDataStore, inTableBody,
            inVisibleColumnsConfig: localVisibleColumns,
            inShowSerial: oldShowSerial,
            inShowActions: oldShowActions, inCurrentTarget,
            inTableFooter
        });
    };

    const localHandleOnChange = ({ inCurrentTarget, inChangeType }) => {
        createHandleOnChange({
            inDataStore,
            inColumnsConfig: localVisibleColumns,
            inToSaveRow: inDefaultRow,
            inCurrentTarget,
            inChangeType
        });
    };

    if (createNewRow) {
        const localTr = createFooter({
            inVisibleColumnsConfig: localVisibleColumns,
            inDefaultRow, inShowDataList, keys,
            onChangeFunc: localHandleOnChange,
            inShowSave: oldShowActions, inOnSaveFunc: localHandleSave,
            inShowSerial: oldShowSerial, inDataStore
        });

        if (localTr) inTableFooter.appendChild(localTr);
        // // debugger;

    };

    if (showAggregateRows) {
        const forSummaryTr = forSummary({
            inVisibleColumnsConfig: localVisibleColumns,
            inThSerialClassName: "", inData,
            inShowTotals: showTotals, inShowBalance: showBalance,
            inShowSerial: oldShowSerial,
            inShowActions: oldShowActions
        });
        // debugger;

        forSummaryTr.forEach(element => {
            inTableFooter.appendChild(element);
        });
    };

};

export default buildFooter;