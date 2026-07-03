import { buildRow } from "./buildRow.js";
import buildDeleteHandler from "./handlerFuncs/V9/buildDeleteHandler.js";
import buildAlterHandler from "./handlerFuncs/V9/buildAlterHandler.js";

const buildBody = ({ inVisibleColumnsConfig, inTableBody, inData,
    inServices, inEndPoints, inDataStore, inConfig, inTableFooter
}) => {

    const dataToShow = inData;
    const tableBody = inTableBody;

    const oldShowActions = tableBody.getAttribute("ks-showActions");
    const oldShowSerial = tableBody.getAttribute("ks-showSerial");
    const showEdit = tableBody.getAttribute("ks-showEdit");
    const showDelete = tableBody.getAttribute("ks-showDelete");
    const deleteType = tableBody.getAttribute("ks-deleteType");
    const deleteIconSize = tableBody.getAttribute("ks-deleteIconSize");

    tableBody.innerHTML = '';
    // tableBody.setAttribute("ks-showActions", inShowActions);

    const deleteFunc = buildDeleteHandler({
        inServices,
        inEndPoints,
        inConfig,
        inDataStore,
        inVisibleColumnsConfig,
        inShowSerial: oldShowSerial,
        inTableBody: tableBody, inTableFooter
    });

    const editFunc = buildAlterHandler({
        inServices,
        inEndPoints,
        inConfig,
        inDataStore,
        inVisibleColumnsConfig,
        inShowSerial: oldShowSerial,
        inTableBody: tableBody, inTableFooter
    });

    const handleDelete = ({ item, index, presentPk }) => {
        deleteFunc({ presentPk });
    };

    const handleEdit = ({ item, index, presentPk }) => {
        console.log("aaaaaaaaaa : ", item, index, presentPk);

        editFunc({ presentPk: item.ParentPk });
    };
    // debugger;
    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial: oldShowSerial === "true",
            inShowActions: oldShowActions === "true",
            onDeleteFunc: handleDelete,
            onEditFunc: handleEdit,
            inShowEdit: showEdit,
            inShowDelete: showDelete,
            inDeleteType: deleteType,
            inDeleteIconSize: deleteIconSize
        });

        tableBody.appendChild(row);
    });
};

export default buildBody;