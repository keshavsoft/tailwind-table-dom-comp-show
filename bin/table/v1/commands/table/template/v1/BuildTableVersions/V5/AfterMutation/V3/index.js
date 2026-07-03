// import { buildBody } from "../../BuildBodyVersions/V4/start.js";
// import { buildBody } from "../../BuildBodyVersions/V5/start.js";

import buildBody from "../../BuildBodyVersions/V6/start.js";
import updateFooter from "../../BuildFooterVersions/ForSummary/V8/UpdateFooter/V5/start.js";

const startFunc = async ({
    inDataStore,
    inServices,
    inEndPoints,
    inTableBody,
    inVisibleColumnsConfig,
    inShowSerial,
    inShowActions,
    inTableFooter
}) => {
    try {
        const dataFromFetch = await inServices.actions.getData({
            inEndPoint: inEndPoints.read
        });

        inDataStore.setData(dataFromFetch);

        const dataToShow = inDataStore.getData();

        buildBody({
            inData: dataToShow, inDataStore,
            inTableBody, inServices,
            inVisibleColumnsConfig,
            inShowSerial, inShowActions,
            inEndPoints
        });
        debugger;
        updateFooter({
            inTableFooter, inShowFooterRows: true,
            inShowTotals: true, inData: dataToShow,
            inVisibleColumnsConfig,
        });
    } catch (err) {
        console.error(err);
        return;
    };
};

export default startFunc;