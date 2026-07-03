import buildBody from "../../BuildBodyVersions/V6/start.js";

import setFocus from "../../../../SetFocus/V4/index.js";

import updateFooter from "./UpdateFooter/V1/start.js";

const startFunc = async ({
    inDataStore,
    inServices,
    inEndPoints,
    inTableBody,
    inVisibleColumnsConfig, inTableFooter,
    inIsUpdateFooter
}) => {
    try {
        // debugger;
        const dataFromFetch = await inServices.actions.getData({
            inEndPoint: inEndPoints.read
        });

        inDataStore.setData(dataFromFetch);

        const dataToShow = inDataStore.getData();

        buildBody({
            inData: dataToShow, inDataStore,
            inTableBody, inEndPoints,
            inVisibleColumnsConfig, inServices
        });

        setFocus({ inContainerEl: inTableFooter });

        if (inIsUpdateFooter) {
            updateFooter({
                inTableFooter,
                inData: dataToShow,
                inShowFooterRows: true,
                inShowTotals: true
            })
        };
        // updateFooter({
        //     inTableFooter, inShowFooterRows: true,
        //     inShowTotals: true, inData: dataToShow,
        //     inVisibleColumnsConfig,
        // });

        clearValues({ inTableFooter });
    } catch (err) {
        console.error(err);
        return;
    };
};

const clearValues = ({ inTableFooter }) => {
    const footerInputs = inTableFooter.querySelectorAll("input");

    for (const th of footerInputs) {
        th.value = "";
    };

};

export default startFunc;