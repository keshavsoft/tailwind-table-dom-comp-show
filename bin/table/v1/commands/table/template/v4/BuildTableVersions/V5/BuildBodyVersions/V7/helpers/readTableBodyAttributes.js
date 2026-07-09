const readTableBodyAttributes = (tableBody) => {
    return {
        showActions: tableBody.getAttribute("ks-showActions"),
        showSerial: tableBody.getAttribute("ks-showSerial"),
        showEdit: tableBody.getAttribute("ks-showEdit"),
        showDelete: tableBody.getAttribute("ks-showDelete"),
        deleteType: tableBody.getAttribute("ks-deleteType"),
        deleteIconSize: tableBody.getAttribute("ks-deleteIconSize")
    };
};

export default readTableBodyAttributes;
