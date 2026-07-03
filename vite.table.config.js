import fs from "fs";
import {
    getCompVersion,
    getEntryPath,
    getTemplateVersion
} from "./src/resolveVersions.js";

if (fs.existsSync("dist")) {
    fs.rmSync("dist", { recursive: true, force: true });
}

const maxTemplateVersion = getTemplateVersion();

export default {
    publicDir: false,
    resolve: {
        alias: {
            "@ks-table-entry": getEntryPath()
        }
    },
    define: {
        __KS_COMP_VERSION__: JSON.stringify(getCompVersion())
    },
    build: {
        lib: {
            entry: "src/table.js",
            name: "KSTable",
            formats: ["umd"],
            fileName: () => `${maxTemplateVersion}/kstableonly.js`
        },
        outDir: "dist",
        emptyOutDir: true
    }
};
