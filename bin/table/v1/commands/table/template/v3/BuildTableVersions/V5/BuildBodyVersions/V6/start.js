import { buildRow } from "./buildRow.js";

const buildBody = ({ inVisibleColumnsConfig, inTableBody, inData }) => {

    const dataToShow = inData;
    const tableBody = inTableBody;

    const oldShowActions = tableBody.getAttribute("ks-showActions");
    const oldShowSerial = tableBody.getAttribute("ks-showSerial");
    const showEdit = tableBody.getAttribute("ks-showEdit");
    const showDelete = tableBody.getAttribute("ks-showDelete");
    const deleteType = tableBody.getAttribute("ks-deleteType");
    const deleteIconSize = tableBody.getAttribute("ks-deleteIconSize");

    tableBody.innerHTML = '';
    // debugger;
    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial: oldShowSerial === "true",
            inShowActions: oldShowActions === "true",
            inShowEdit: showEdit,
            inShowDelete: showDelete,
            inDeleteType: deleteType,
            inDeleteIconSize: deleteIconSize
        });

        tableBody.appendChild(row);
    });
};

export default buildBody;