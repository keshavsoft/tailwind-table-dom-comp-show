const entryModules = import.meta.glob(
    "../bin/table/*/commands/table/template/*/entry.js"
);

function pickLatestEntry() {
    let maxTable = 0;
    let maxTemplate = 0;
    let latestKey = null;

    for (const key of Object.keys(entryModules)) {
        const match = key.match(/\/table\/(v\d+)\/commands\/table\/template\/(v\d+)\/entry\.js$/);

        if (!match) {
            continue;
        }

        const tableNum = parseInt(match[1].slice(1));
        const templateNum = parseInt(match[2].slice(1));

        if (tableNum > maxTable || (tableNum === maxTable && templateNum > maxTemplate)) {
            maxTable = tableNum;
            maxTemplate = templateNum;
            latestKey = key;
        }
    }

    if (!latestKey) {
        throw new Error("No table entry found under bin/table");
    }

    return {
        latestKey,
        compVersion: `v${maxTable}.${maxTemplate}`
    };
}

(async () => {
    const { latestKey, compVersion } = pickLatestEntry();
    const { initShowTable } = await entryModules[latestKey]();

    window.KSTableCompVersion = compVersion;
    window.KSTableComp = {};
    window.KSTableComp.initShowTable = initShowTable;
})();
