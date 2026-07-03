const applyDefaultValue = ({
    input,
    inDefaultValue
}) => {
    if (inDefaultValue === undefined) return;

    input.value = inDefaultValue;
    input.dataset.defaultValue = inDefaultValue;
};

export default applyDefaultValue;