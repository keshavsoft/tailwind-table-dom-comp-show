const startFunc = ({ inColumnsConfig, inFindRow, inToSaveRow }) => {
    // debugger;
    for (const [key, value] of Object.entries(inToSaveRow)) {
        if (key in inFindRow) {
            inToSaveRow[key] = inFindRow[key];
        };
    };
};

export { startFunc };