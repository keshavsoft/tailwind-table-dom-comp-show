import createHeaderCell from "./CreateHeaderCell/start.js";

const startFunc = ({
    inVisibleColumnsConfig,
    tr,
    inClassName
}) => {

    for (const value of inVisibleColumnsConfig) {

        const width =
            value?.cellConfig?.width;

        tr.appendChild(
            createHeaderCell({
                inKey: value.columnName,
                inClassName,
                inWidth: width
            })
        );

    };

};

export default startFunc;