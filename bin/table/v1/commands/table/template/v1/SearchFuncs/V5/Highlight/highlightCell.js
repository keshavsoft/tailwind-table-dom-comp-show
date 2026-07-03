// /TableSearch/Highlight/highlightCell.js

const highlightCell = ({
    cell,
    regex
}) => {
    const target =
        cell._highlightTarget || cell;

    target.innerHTML =
        cell.dataset.originalHtml.replace(
            regex,
            `<mark>$1</mark>`
        );

};

export default highlightCell;
