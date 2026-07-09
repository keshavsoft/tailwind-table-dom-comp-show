// /TableSearch/Highlight/resetCellHighlight.js

const resetCellHighlight = (cell) => {
    const target =
        cell._highlightTarget || cell;

    target.innerHTML =
        cell.dataset.originalHtml;

};

export default resetCellHighlight;
