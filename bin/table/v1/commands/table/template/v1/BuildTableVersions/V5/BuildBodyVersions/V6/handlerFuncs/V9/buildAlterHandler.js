import { deleteFromServer } from "./deleteFromServer.js";
import runDeleteCallback from "./runDeleteCallback.js";
import { showToast } from "./showToast.js";

// import afterMutation from "../../../../AfterMutation/V2/index.js";
import afterMutation from "../../../../AfterMutation/V5/index.js";

const buildDeleteHandler = ({
    inServices,
    inEndPoints,
    inConfig,
    inDataStore,
    inVisibleColumnsConfig,
    inShowSerial,
    inTableBody, inTableFooter
}) => {
    const refreshAfterDelete = () => {
        afterMutation({
            inDataStore,
            inServices,
            inEndPoints,
            inTableBody,
            inVisibleColumnsConfig,
            inShowSerial, inTableFooter
        });
    };

    const localDeleteHandler = async ({ presentPk }) => {
        console.log(" :", presentPk, inConfig?.callbacks?.table);

        if (inConfig?.callbacks?.table?.onEdit) {
            inConfig?.callbacks?.table?.onEdit(presentPk);
        };

        //   presentPk, inOnDelete: inConfig?.callbacks?.table?.onDelete
        // const userConfirm = confirm(`Are you sure to delete row ${presentPk} ?`);

        // if (userConfirm === false) return;

        // const fromDelete = await deleteFromServer({ presentPk, inEndPoints, inServices });

        // if (fromDelete.ok) {
        //     const fromClient = await runDeleteCallback({
        //         presentPk, inOnDelete: inConfig?.callbacks?.table?.onDelete
        //     });

        //     if (fromClient.ok) {
        //         refreshAfterDelete();

        //         showToast({
        //             message: `Row ${presentPk} deleted successfully`
        //         });
        //     };
        // };
    };

    return localDeleteHandler;
};

export default buildDeleteHandler;
