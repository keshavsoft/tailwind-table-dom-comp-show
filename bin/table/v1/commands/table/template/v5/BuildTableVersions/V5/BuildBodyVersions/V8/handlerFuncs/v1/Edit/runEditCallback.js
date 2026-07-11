const runEditCallback = async ({ item, index, presentPk, inOnEdit }) => {
    if (inOnEdit) {
        return await inOnEdit({ item, index, presentPk });
    };

    return { ok: true };
};

export default runEditCallback;
