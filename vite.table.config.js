import { getTemplateVersion } from "./src/resolveVersions.js";

const maxTemplateVersion = getTemplateVersion();

export default {
    build: {
        lib: {
            entry: "src/table.js",
            name: "KSTable",
            formats: ["umd"],
            fileName: () => `${maxTemplateVersion}/kstablecomp.js`
        },
        outDir: "public",
        emptyOutDir: false
    }
};
