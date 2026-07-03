import { buildBody } from "../../../../../BuildBodyVersions/V4/start.js";

const startFunc = async ({
    inDataStore,
    inServices,
    inEndPoints,
    inTableBody,
    inVisibleColumnsConfig,
    inShowSerial
}) => {
    try {
        const dataFromFetch = await inServices.actions.getData({
            inEndPoint: inEndPoints.read
        });

        inDataStore.setData(dataFromFetch);

        const dataToShow = inDataStore.getData();

        buildBody({
            inDataToShow: dataToShow,
            inTableBody,
            inVisibleColumnsConfig,
            inShowSerial
        })
    } catch (err) {
        console.error(err);
        return;
    };
};

export default startFunc;