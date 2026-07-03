import runEditCallback from "./runEditCallback.js";
import { showToast } from "./showToast.js";

const buildEditHandler = ({
    inServices,
    inEndPoints,
    inConfig,
    inDataStore,
    inVisibleColumnsConfig,
    inShowSerial,
    inTableBody
}) => {
    const localDeleteHandler = async ({ item, index, presentPk }) => {

        debugger;
        const userConfirm = confirm(`Are you sure to alter row ${presentPk} ?`);

        if (userConfirm === false) return;

        const fromClient = await runEditCallback({
            item, index, presentPk,
            inOnEdit: inConfig?.callbacks?.table?.onEdit
        });

        // if (fromClient.ok) {
        //     // refreshAfterDelete();

        //     showToast({
        //         message: `Row ${presentPk} edited`
        //     });
        // };
    };

    return localDeleteHandler;
};

export default buildEditHandler;
