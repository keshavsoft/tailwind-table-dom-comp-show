import { saveFooterRow } from "../saveFooterRow.js";

const startFunc = async ({ inServices, inEndPoints, inPayload, inDataStore, inTableBody,
    inVisibleColumnsConfig, inShowSerial, inShowActions, inCurrentTarget,
    inTableFooter
}) => {

    await saveFooterRow({
        inServices, inEndPoints, inPayload, inDataStore, inTableBody,
        inVisibleColumnsConfig, inShowSerial, inShowActions, inCurrentTarget,
        inTableFooter
    });
};

export { startFunc };