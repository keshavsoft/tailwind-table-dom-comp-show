import { createRow } from "./createRow.js";
import { createIndexCell } from "./createIndexCell.js";
import createDataCell from "./CreateDataCell/index.js";
import { createOptionsCell } from "./createOptionsCell.js";

const buildRow = ({ item, index, inVisibleColumnsConfig, searchValue,
    inShowSerial, inShowActions = false, onDeleteFunc, onEditFunc,
    inShowEdit, inShowDelete, inDeleteType, inDeleteIconSize, handlers
}) => {
    const tr = createRow({
        inClassName: "border-t hover:bg-blue-100 odd:bg-gray-100",
        inPk: item?.pk
    });

    appendSerialCell({ tr, inShowSerial, index });

    appendDataCells({
        tr, item, columns: inVisibleColumnsConfig,
        searchValue
    });

    if (inShowActions) {
        appendActionCell({
            tr, item, index, onDeleteFunc, onShowFunc: handlers.onShow,
            onEditFunc: handlers.onEdit, inShowEdit, inShowDelete,
            inDeleteType, inDeleteIconSize
        });
    };

    return tr;
};

const appendSerialCell = ({ tr, inShowSerial, index, inWidth }) => {
    if (inShowSerial) {
        tr.appendChild(createIndexCell({ index, inWidth }));
    };
};

const appendDataCells = ({ tr, item, columns, searchValue }) => {
    for (const [key, value] of Object.entries(columns)) {
        tr.appendChild(createDataCell({
            value: item[value.columnName],
            searchValue,
            inCellConfig: value.cellConfig
        }));
    };
};

const appendActionCell = ({ tr, item, index,
    onDeleteFunc, onEditFunc, onShowFunc,
    inShowEdit, inShowDelete, inDeleteType, inDeleteIconSize }) => {
    // debugger;

    tr.appendChild(
        createOptionsCell({
            item,
            index,
            onDeleteFunc, onEditFunc, onShowFunc,
            inShowEdit, inShowDelete, inDeleteType, inDeleteIconSize
        })
    );
};

export { buildRow };
