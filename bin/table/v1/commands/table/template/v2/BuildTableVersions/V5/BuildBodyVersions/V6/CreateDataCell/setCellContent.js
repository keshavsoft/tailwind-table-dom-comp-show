import { highlight } from "./highlight.js";

const setCellContent = ({
    td,
    displayValue,
    searchValue
}) => {

    if (searchValue === undefined) {

        td.innerHTML = displayValue;

    } else {

        td.innerHTML = highlight({
            text: displayValue,
            searchValue
        });

    };

};

export default setCellContent;