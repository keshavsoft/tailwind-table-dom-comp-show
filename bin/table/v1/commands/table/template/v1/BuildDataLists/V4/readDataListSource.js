const readDataListSource = ({ columnConfig, dataStore }) => {
    if (columnConfig.dataListSource === columnConfig.columnName) {
        return ifSameTable({ columnConfig, dataStore });
    } else {
        return ifNotSameTable({ columnConfig, dataStore });
    };
};

const readDataListSource1 = ({ columnConfig, dataStore }) => {
    if (!columnConfig.dataListSource) return [];

    const [source, key] = columnConfig.dataListSource.split(".");
    const endpoints = dataStore.getAllDataLists();
    const endpointKey = endpoints?.[source];

    if (!endpointKey) return [];

    const data = dataStore.getDataList(source) || [];

    if (!key) return data;

    return data.map(row => row?.[key]);
};

const ifNotSameTable = ({ columnConfig, dataStore }) => {
    if (!columnConfig.dataListSource) return [];

    const [source, key] = columnConfig.dataListSource.split(".");
    const endpoints = dataStore.getAllDataLists();
    const endpointKey = endpoints?.[source];

    if (!endpointKey) return [];

    const data = dataStore.getDataList(source) || [];

    if (!key) return data;

    return data.map(row => row?.[key]);
};

const ifSameTable = ({ columnConfig, dataStore }) => {
    const dataFromStore = dataStore.getData();

    const neededArray = dataFromStore.map(element => {
        return element[columnConfig.columnName];
    });

    return neededArray;
};

export default readDataListSource;
