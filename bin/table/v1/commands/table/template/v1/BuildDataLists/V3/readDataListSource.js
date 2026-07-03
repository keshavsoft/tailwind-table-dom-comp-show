const readDataListSource = ({ columnConfig, dataStore }) => {
    if (!columnConfig.dataListSource) return [];

    const [source, key] = columnConfig.dataListSource.split(".");
    const endpoints = dataStore.getAllDataLists();
    const endpointKey = endpoints?.[source];

    if (!endpointKey) return [];

    const data = dataStore.getDataList(source) || [];

    if (!key) return data;

    return data.map(row => row?.[key]);
};

export default readDataListSource;
