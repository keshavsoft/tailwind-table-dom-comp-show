import { buildRow } from "./buildRow.js";
import initHandlers from "./helpers/initHandlers.js";

const buildBody = ({ inVisibleColumnsConfig, inTableBody, inData,
    callbacks
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

    const handlers = initHandlers({
        inShowCallBack: callbacks.table.body.show,
        inEditCallBack: callbacks.table.body.edit
    });

    // debugger;
    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial: oldShowSerial === "true",
            inShowActions: oldShowActions === "true",
            inShowEdit: showEdit,
            inShowDelete: showDelete,
            inDeleteType: deleteType,
            inDeleteIconSize: deleteIconSize,
            handlers
        });

        tableBody.appendChild(row);
    });
};

export default buildBody;