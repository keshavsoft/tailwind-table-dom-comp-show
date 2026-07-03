const applyDataList = ({
    input,
    key,
    showDataList,
    inColumnsConfig
}) => {
    const findColumn = inColumnsConfig.find(
        element => element.columnName === key
    );

    if (
        showDataList &&
        findColumn?.tableFooterDataListShow
    ) {
        input.setAttribute("list", `${key}List`);
        input.dataset.dataListSource =
            findColumn.dataListSource;
    }
};

export default applyDataList;