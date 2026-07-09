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
    inTableBody, inTableFooter,
    inCallBack
}) => {
    // const refreshAfterDelete = () => {
    //     afterMutation({
    //         inDataStore,
    //         inServices,
    //         inEndPoints,
    //         inTableBody,
    //         inVisibleColumnsConfig,
    //         inShowSerial, inTableFooter
    //     });
    // };

    const localDeleteHandler = async (options) => {
        // console.log("options----------- : ", inConfig, options);
        inCallBack(options);
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
