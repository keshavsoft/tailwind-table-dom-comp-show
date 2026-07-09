import UpdateFooter from "../../../../AfterMutation/V5/UpdateFooter/V2/start.js";

const buildUpdateHandler = ({
    inServices,
    inEndPoints,
    inConfig,
    inDataStore,
    inVisibleColumnsConfig,
    inShowSerial,
    inTableBody, inTableFooter,
    inUpdateService,
    inUpdateEndPoint, inClientUpdate
}) => {
    const localDeleteHandler = async ({ item, index, presentPk, updatedItem }) => {
        const fromService = await inUpdateService({ inEndPoint: inUpdateEndPoint, payload: updatedItem })

        // console.log("vvvvvvvvvvv : ", fromService);
        if (fromService.ok) {
            const dataFromFetch = await inServices.actions.getData({
                inEndPoint: inEndPoints.read
            });

            inDataStore.setData(dataFromFetch);
            
            const data = inDataStore.getData();

            UpdateFooter({
                inTableFooter,
                inData: data, inShowSerial,
                inShowFooterRows: true,
                inShowTotals: true
            });
        };

        if (inClientUpdate) {
            inClientUpdate(updatedItem);
        };
    };

    return localDeleteHandler;
};

export default buildUpdateHandler;
