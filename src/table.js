import { initShowTable } from "@ks-table-entry";

(async () => {
    window.KSTableCompVersion = __KS_COMP_VERSION__;
    window.KSTableComp = {};
    window.KSTableComp.initShowTable = initShowTable;
})();
