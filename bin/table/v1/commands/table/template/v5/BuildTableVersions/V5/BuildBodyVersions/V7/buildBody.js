import { buildRow } from "./buildRow.js";

const buildBody = ({ inDataStore, inContainerEl, inDom, options }) => {
    const tableBody = inDom.getTableBody(inContainerEl);
    const data = inDataStore.getData();
    const columns = inDataStore.getColumns();
debugger;
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        const row = buildRow({
            item, index, columns, options,
            inShowThousandsSeperator
        });
        tableBody.appendChild(row);
    });
};

export { buildBody };