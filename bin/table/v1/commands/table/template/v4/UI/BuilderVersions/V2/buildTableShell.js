const buildTableShell = ({ inTableClassName = "table bg-white table-fixed w-[1000px]",
    inShowSerial, inShowActions, inShowShow,
    inShowEdit, inShowDelete, inDeleteType, inDeleteIconSize
}) => {

    const wrapper = document.createElement("div");
    wrapper.className = "rounded-b-lg shadow-md overflow-x-auto tableParent";

    const table = document.createElement("table");
    table.className = inTableClassName;

    const thead = document.createElement("thead");
    thead.className = "theadClass";

    thead.setAttribute("ks-showActions", inShowActions);
    thead.setAttribute("ks-showSerial", inShowSerial);

    const tbody = document.createElement("tbody");
    tbody.className = "tbodyClass";

    tbody.setAttribute("ks-showActions", inShowActions);
    tbody.setAttribute("ks-showSerial", inShowSerial);
    tbody.setAttribute("ks-showEdit", inShowEdit);
    tbody.setAttribute("ks-showDelete", inShowDelete);
    tbody.setAttribute("ks-showShow", inShowShow);

    tbody.setAttribute("ks-deleteType", inDeleteType);
    tbody.setAttribute("ks-deleteIconSize", inDeleteIconSize);

    const tfoot = document.createElement("tfoot");
    tfoot.className = "tfootClass";

    tfoot.setAttribute("ks-showActions", inShowActions);
    tfoot.setAttribute("ks-showSerial", inShowSerial);

    table.append(thead, tbody, tfoot);
    wrapper.append(table);

    return { wrapper };
};

export default buildTableShell;