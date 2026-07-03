import createDataListElement from "./createDataListElement.js";
import getUniqueTruthyValues from "./getUniqueTruthyValues.js";
import readDataListSource from "./readDataListSource.js";

const orchestrateDataLists = ({
    inContainerEl,
    inDataStore,
    inDom,
    inDataListColumns
}) => {
    const dataListContainer = inDom.getDataListContainerClass(inContainerEl);

    if (!dataListContainer) return;

    dataListContainer.innerHTML = "";

    inDataListColumns.forEach(columnConfig => {
        const sourceData = readDataListSource({
            columnConfig,
            dataStore: inDataStore
        });

        const values = getUniqueTruthyValues(sourceData);
        const datalist = createDataListElement({
            columnName: columnConfig.columnName,
            values
        });

        dataListContainer.appendChild(datalist);
    });
};

export default orchestrateDataLists;
