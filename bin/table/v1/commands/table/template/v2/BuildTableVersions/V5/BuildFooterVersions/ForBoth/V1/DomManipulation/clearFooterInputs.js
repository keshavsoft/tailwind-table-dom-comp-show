const clearFooterInputs = ({ inTFoot }) => {
    inTFoot.querySelectorAll("input, select, textarea").forEach((el) => {
        if (el.tagName === "SELECT") {
            el.selectedIndex = 0;
            return;
        };

        el.value = ("defaultValue" in el.dataset)
            ? el.dataset.defaultValue
            : "";
    });
};

export { clearFooterInputs };