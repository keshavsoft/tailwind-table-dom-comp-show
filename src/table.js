import * as entry from "@ks-table-entry";

(async () => {
    window.KSTableCompVersion = __KS_COMP_VERSION__;
    const entryObj = { ...entry };
    if (entryObj.initShowTable) {
        window.KSTableComp = window.KSTableComp || {};
        window.KSTableComp.initShowTable = entryObj.initShowTable;
    }
})();
