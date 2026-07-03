import "@ks-table-entry";

(async () => {
    if (window.ks && window.ks.classes && window.ks.classes.tableShowOnly) {
        window.ks.classes.tableShowOnly.version = __KS_COMP_VERSION__;
    }
})();
