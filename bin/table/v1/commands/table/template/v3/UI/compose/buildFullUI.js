import { buildHeaderRow } from "../builders/buildHeaderRow.js";
import { buildDataListContainer } from "../builders/buildDataListContainer.js";
import buildTableShell from "../BuilderVersions/V2/buildTableShell.js";

export const buildFullUI = ({ containerEl, inTableName, inIsDataListNeeded = true,
    inIsTableNeeded = true, inIsShowHeaderRow = false,
    inUiClasses, clearOld = true, inShowSerial, inShowActions,
    inShowEdit, inShowDelete, inDeleteType, inDeleteIconSize }) => {

    const root = containerEl;
    root.className = "max-w-6xl mx-auto p-2";
    // debugger;
    if (clearOld) root.innerHTML = "";

    let children = [];

    if (inIsShowHeaderRow) {
        const { header } = buildHeaderRow({ inTitleText: inTableName });

        children.push(header);
    };

    if (inIsTableNeeded) {
        const { wrapper } = buildTableShell({
            inTableClassName: inUiClasses?.table?.tableClass,
            inShowSerial, inShowActions,
            inShowEdit, inShowDelete, inDeleteType, inDeleteIconSize
        });

        children.push(wrapper);
    };

    if (inIsDataListNeeded) {
        const { container: dataList } = buildDataListContainer();
        children.push(dataList);
    };

    root.replaceChildren(...children);
};