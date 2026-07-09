import afterMutation from "../../../AfterMutation/V5/index.js";
import checkFooterInputsNonEmpty from "./checkFooterInputsNonEmpty.js";

const saveFooterRow = async ({
    inDataStore,
    inDom,
    inServices,
    inEndPoints,
    inContainerEl,
    inOptions,
    inColumnsConfig,
    inVisibleColumnsConfig,
    inShowActions,
    inShowSerial,
    inShowTable,
    inToSaveRow,
    tableOptions,
    inPayload,
    inTableBody,
    clearFooter = true,
    inCurrentTarget,
    inTableFooter
}) => {
    const localIsFooterInputsNonEmpty = checkFooterInputsNonEmpty({ inTableFooter });

    if (!localIsFooterInputsNonEmpty) return;

    try {
        const fromSave = await inServices.actions.createNoRepsonse({
            inEndPoint: inEndPoints.create,
            payload: inPayload
        });

        if (fromSave.ok) {
            // console.log("ssssssssss");

            afterMutation({
                inDataStore, inServices, inEndPoints,
                inTableBody, inVisibleColumnsConfig,
                inShowSerial, inShowActions, inTableFooter,
                inIsUpdateFooter: true
            });

        };
    } catch (err) {
        console.error(err);
        return;
    };

    // const closestTfoot = inCurrentTarget.closest(".tfootClass");

    // if (clearFooter) clearFooterInputs({ inTFoot: closestTfoot });

    // focusFooter({ inTFoot: closestTfoot });
};

const checkFooterInputsNonEmpty1 = ({ inTableFooter }) => {
    if (!inTableFooter) return true;

    const localInputs = Array.from(inTableFooter.querySelectorAll("input"))
        .filter((input) => {
            const localInputType = input.type?.toLowerCase();

            return !input.disabled &&
                !input.readOnly &&
                !["hidden", "button", "submit", "reset"].includes(localInputType);
        });

    localInputs.forEach((input) => input.setCustomValidity(""));

    const localEmptyInput = localInputs.find((input) => input.value.trim() === "");

    if (!localEmptyInput) return true;

    localEmptyInput.setCustomValidity("Please fill this field.");
    localEmptyInput.reportValidity();
    localEmptyInput.focus();

    return false;
};

const focusFooter = ({ inTFoot }) => {
    const el = inTFoot.querySelector(
        "tfoot input, tfoot select, tfoot textarea"
    );
    el?.focus();
};

export { saveFooterRow };
