const startFunc = ({ inTableFooter }) => {
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

export default startFunc;
