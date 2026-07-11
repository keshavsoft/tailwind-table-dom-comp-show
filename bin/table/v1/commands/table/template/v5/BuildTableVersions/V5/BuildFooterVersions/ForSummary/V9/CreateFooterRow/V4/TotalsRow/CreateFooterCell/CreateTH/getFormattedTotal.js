const getFormattedTotal = ({
    inTotal,
    inShowThousandsSeperator = false
}) => {

    if (inShowThousandsSeperator) {
        // return inTotal.toLocaleString("en-IN");
        return Number(inTotal).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return inTotal;

};

export default getFormattedTotal;