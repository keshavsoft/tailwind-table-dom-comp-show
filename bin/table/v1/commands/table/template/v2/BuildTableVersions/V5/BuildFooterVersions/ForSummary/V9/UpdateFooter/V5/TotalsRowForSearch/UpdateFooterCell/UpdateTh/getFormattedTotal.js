const getFormattedTotal = ({
    inTotal,
    inShowThousandsSeperator = false
}) => {

    if (inShowThousandsSeperator) {

        return inTotal.toLocaleString("en-IN");

    };

    return inTotal;

};

export default getFormattedTotal;