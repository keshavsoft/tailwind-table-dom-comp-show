// /TableSearch/Cache/cacheCell.js

const cacheCell = (cell) => {
    const tableBodyCell =
        cell.querySelector("ks-table-body-cell");

    cell._highlightTarget =
        tableBodyCell || cell;

    cell.dataset.originalHtml =
        cell._highlightTarget.innerHTML;

};

export default cacheCell;
