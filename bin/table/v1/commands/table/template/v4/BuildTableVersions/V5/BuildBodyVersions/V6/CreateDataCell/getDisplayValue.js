const getDisplayValue = ({
    value,
    inCellConfig = {}
}) => {

    const showThousandsSeperator =
        inCellConfig.showThousandsSeperator || false;

    let displayValue =
        (value ?? "").toString();

    if (showThousandsSeperator) {
        displayValue =
            Number(value || 0)
                .toLocaleString("en-IN");

    };

    return displayValue;

};

export default getDisplayValue;