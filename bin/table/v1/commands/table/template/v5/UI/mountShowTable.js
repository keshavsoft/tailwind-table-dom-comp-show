import { buildFullUI } from "./compose/buildFullUI.js";

import buildHeader from "../BuildTableVersions/V5/BuildHeaderVersions/V4/index.js";

import buildBody from "../BuildTableVersions/V5/BuildBodyVersions/V6/start.js";
import searchFuncs from "../SearchFuncs/V5/index.js";
import setFocus from "../SetFocus/V4/index.js";
import buildFooter from "../BuildTableVersions/V5/BuildFooterVersions/ForBoth/V2/start.js";
import buildDataLists from "../BuildDataLists/V4/addToDom.js";

const startFunc = ({
    containerEl,
    dataStore,
    dom,
    services,
    options,
    endPoints,
    columnsConfig,
    uiClasses,
    callbacks,
    inConfig
}) => {
    // debugger
    // console.log("v14");

    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();
    const searchableColumnsConfig = dataStore.getSearchableColumnsConfig();

    const data = dataStore.getData();
    const showSerial = options.table.showSerial;
    const serialWidth = options.table.serialWidth;
    const showDataList = options.table.showDataList;

    const dataListArray = dataStore.getDataList("AccountName");

    const dataListColumns = dataStore.getDataListColumns();

    const showTotals = options?.table?.showTotals;
    const showBalance = options?.table?.showBalance;
    const showFilterVerticalForm = options.showFilterVerticalForm;
    const showSearch = options.firstRow.showSearch;
    const showTotalsForSearch = options?.table?.showTotalsForSearch;
    const showBalanceForSearch = options?.table?.showBalanceForSearch;
    const showFooterRows = options?.table?.showFooterRows;

    const showActions = options?.table?.showActions;
    const showFooter = options?.table?.showFooter;
    const optionsWidth = options.table.optionsWidth;
    const footerOptions = options.table?.footer;

    const defaultRow = dataStore.getDefaultRow();
    const showSave = options?.table?.showSave;
    const toSaveRow = dataStore.getToSaveRow();

    // console.log("defaultRow : ", toSaveRow, defaultRow);

    const inShowEdit = options?.table?.body?.showEdit;
    const inShowDelete = options?.table?.body?.showDelete;
    const inDeleteType = options?.table?.body?.deleteType;
    const inDeleteIconSize = options?.table?.body?.deleteIconSize;
    // console.log("", options?.table?.body);

    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: showSearch,
        inShowSerial: showSerial,
        inSerialWidth: serialWidth,
        inShowActions: showActions,
        inShowEdit, inShowDelete, inDeleteType, inDeleteIconSize
    });

    buildHeader({
        inContainerEl: containerEl,
        inDom: dom,
        inThClassName: uiClasses?.thead?.thClass,
        inTrClassName: uiClasses?.thead?.trClass,
        inThSerialClassName: uiClasses?.thead?.thSerialClass,
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial,
        inSerialWidth: serialWidth,
        inShowActions: showActions,
        inOptionsWidth: optionsWidth,
    });

    const tableBody = dom.getTableBody(containerEl);

    buildBody({
        inVisibleColumnsConfig: visibleColumnsConfig,
        inTableBody: tableBody,
        inData: data,
        inServices: services,
        inEndPoints: endPoints,
        inDataStore: dataStore,
        inConfig,
        inTableFooter: dom.getTableFooter(containerEl)
    });
    // debugger;
    if (showFooter) {
        buildFooter({
            inTableFooter: dom.getTableFooter(containerEl),
            options,
            inVisibleColumnsConfig: visibleColumnsConfig,
            inData: data,
            inShowTotals: showTotals,
            inShowBalance: showBalance,
            inShowTotalsForSearch: showTotalsForSearch,
            inShowBalanceForSearch: showBalanceForSearch,
            inShowDataList: showDataList,
            inServices: services,
            inEndPoints: endPoints,
            inDataStore: dataStore,
            inTableBody: tableBody,
            inOptions: footerOptions,
            inToSaveRow: toSaveRow
        });
    };

    if (showDataList) {
        buildDataLists({
            inContainerEl: containerEl,
            inDataStore: dataStore,
            inDom: dom,
            inData: data,
            inDataListColumns: dataListColumns
        });
    };

    if (showSearch) {
        // for search vertical
        searchFuncs({ inContainerEl: containerEl });
    };

    setFocus({ inContainerEl: containerEl });
};

const startFunc1 = () => {

};

export default startFunc;