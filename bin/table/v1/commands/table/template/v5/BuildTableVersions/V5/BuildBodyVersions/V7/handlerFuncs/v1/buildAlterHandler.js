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
    // console.log("aaaaaaaaaaa :");

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

    const localDeleteHandler = async ({ item, index, presentPk, updatedItem }) => {
        if (inConfig?.callbacks?.table?.onEdit) {
            inConfig?.callbacks?.table?.onEdit(updatedItem);
        };
    };

    return localDeleteHandler;
};

export default buildDeleteHandler;
