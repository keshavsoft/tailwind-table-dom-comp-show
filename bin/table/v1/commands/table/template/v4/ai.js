// ai.js
// import "../../components/v10/index.js";

import { createState } from "./HtmlState/start.js";
import { getDomManipulation } from "./DomManipulation/start.js";
import { prepareColumnsBundle } from "./Utils/prepareColumnsBundle.js";
import { normalizeConfig } from "./Utils/normalizeConfig.js";

import { createStore } from "./TableStore/V3/start.js";
import { KeshavUIClasses } from "./uiClasses.js";

import mountShowTableUI from "./UI/mountTableOnly.js";

class KSAiTableShowOnly {
    constructor(inConfig) {
        let config = normalizeConfig(inConfig);

        const { containerId, options, endPoints, columnsConfig,
            uiClasses, callbacks, defaults } = config;
        // console.log("callbacks---------- : ", callbacks);

        this.config = config;
        this.containerEl = document.getElementById(containerId);

        if (!this.containerEl) {
            throw new Error(`Container not found: ${containerId}`);
        };

        this.dataStore = createStore();
        this.uiState = createState();
        this.dom = getDomManipulation();

        this.uiState.setTableContainerId(containerId);
        this.uiClasses = this.mergeUI(KeshavUIClasses, uiClasses);

        const bundle = prepareColumnsBundle(columnsConfig);

        this.dataStore.setColumns(bundle.keys);
        this.dataStore.setVisibleColumns(bundle.visibleColumns);
        this.dataStore.setVisibleConfig(bundle.visibleConfig);
        this.dataStore.setDefaultRow(bundle.defaultRow);
        this.dataStore.setDataListColumns(bundle.dataListColumns);
        this.dataStore.setToSaveRow(bundle.toSaveRow);
        this.dataStore.setSearchableColumnsConfig(bundle.searchableColumnsConfig);

        this.options = options;
        this.endPoints = endPoints;
        this.columnsConfig = columnsConfig;
        // constructor
        this.callbacks = callbacks || {};

        this.defaults = defaults;
    };

    mergeUI(defaults, incoming = {}) {
        return {
            ...defaults,
            ...incoming,
            form: {
                ...defaults.form,
                ...incoming.form
            }
        };
    };

    async initShowTable() {
        mountShowTableUI({
            containerEl: this.containerEl,
            dataStore: this.dataStore,
            dom: this.dom,
            options: this.options,
            columnsConfig: this.columnsConfig,
            uiClasses: this.uiClasses,
            callbacks: this.callbacks,
            inConfig: this.config,
            inShowFooter: true,
            inDefaults: this.defaults
        });
    };
};

//window.KSAiCompTable = KSAiTableShowOnly;

window.ks = window.ks || {};
window.ks.classes = window.ks.classes || {};
window.ks.classes.tableShowOnly = KSAiTableShowOnly;
window.ks.classes.tableShowOnlyVersion = "v4";

export { KSAiTableShowOnly as KSAiTable };