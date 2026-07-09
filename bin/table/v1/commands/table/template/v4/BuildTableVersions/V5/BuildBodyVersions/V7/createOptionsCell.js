// Note: The Web Component KsTableBodyOptionsCell was moved to Public/components/v9/tableBodyOptionsCell/index.js

const createOptionsCell = ({ item, index, onDeleteFunc, onEditFunc,
    inShowEdit, inShowDelete, inDeleteType, inDeleteIconSize,
    onShowFunc
}) => {
    const td = document.createElement("td");
    td.className = "px-4 py-2 border";

    const ksTd = document.createElement("ks-table-body-options-cell");
    ksTd.ksItem = item;
    ksTd.ksIndex = index;
    ksTd.ksOnDeleteFunc = onDeleteFunc;
    ksTd.ksOnEditFunc = onEditFunc;
    ksTd.ksOnShowFunc = onShowFunc;
    // ksTd.ksOnEditFunc = onEditFunc;
    // console.log("onEditFunc----------- : ", onEditFunc);

    ksTd.setAttribute("show-edit", inShowEdit);
    ksTd.setAttribute("show-delete", inShowDelete);
    ksTd.setAttribute("delete-type", inDeleteType);
    ksTd.setAttribute("delete-icon-size", inDeleteIconSize);

    td.appendChild(ksTd);

    return td;
};

export { createOptionsCell };