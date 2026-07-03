const getTotal = ({
    inData,
    inKey
}) => {

    const localTotal = inData.reduce(
        (acc, element) => {

            return acc +
                Number(element[inKey] || 0);

        },
        0
    );

    return localTotal;

};

export default getTotal;