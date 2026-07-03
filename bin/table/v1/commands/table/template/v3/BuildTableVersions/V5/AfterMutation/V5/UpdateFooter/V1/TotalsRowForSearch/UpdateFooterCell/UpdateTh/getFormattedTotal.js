const getFormattedTotal = ({
    inTotal,
    inShowThousandsSeperator = true
}) => {
    console.log("inShowThousandsSeperator : ", inShowThousandsSeperator);

    if (inShowThousandsSeperator) {

        return inTotal.toLocaleString("en-IN");

    };

    return inTotal;

};

export default getFormattedTotal;