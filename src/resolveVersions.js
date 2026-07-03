import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tableDir = path.join(__dirname, "..", "bin", "table");

function listVersions(dir) {
    return fs.readdirSync(dir)
        .filter(n => /^v\d+$/.test(n))
        .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
}

export function getTableVersion() {
    const latest = listVersions(tableDir).at(-1);

    if (!latest) {
        throw new Error("No table version found in bin/table");
    }

    return latest;
}

export function getTemplateVersion(tableVersion = getTableVersion()) {
    const templateDir = path.join(tableDir, tableVersion, "commands", "table", "template");
    const latest = listVersions(templateDir).at(-1);

    if (!latest) {
        throw new Error(`No template version found in ${templateDir}`);
    }

    return latest;
}

export function getCompVersion(
    tableVersion = getTableVersion(),
    templateVersion = getTemplateVersion(tableVersion)
) {
    return `${tableVersion}.${templateVersion.slice(1)}`;
}

export default function resolveVersions() {
    const tableVersion = getTableVersion();
    const templateVersion = getTemplateVersion(tableVersion);

    return {
        tableVersion,
        templateVersion,
        compVersion: getCompVersion(tableVersion, templateVersion)
    };
}
