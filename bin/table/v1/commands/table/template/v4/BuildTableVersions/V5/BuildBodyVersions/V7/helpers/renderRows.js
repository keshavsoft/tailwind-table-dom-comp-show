import { buildRow } from "../buildRow.js";

const renderRows = ({
    tableBody, dataToShow, inVisibleColumnsConfig,
    showSerial, showActions, showEdit, showDelete,
    deleteType, deleteIconSize, handlers
}) => {
    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item,
            index,
            inVisibleColumnsConfig,
            inShowSerial: showSerial === "true",
            inShowActions: showActions === "true",
            onDeleteFunc: handlers.onDelete,
            onEditFunc: handlers.onEdit,
            onUpdate: handlers.onUpdate,
            onShow: handlers.onShow,
            inShowEdit: showEdit,
            inShowDelete: showDelete,
            inDeleteType: deleteType,
            inDeleteIconSize: deleteIconSize
        });

        tableBody.appendChild(row);
    });
};

export default renderRows;
