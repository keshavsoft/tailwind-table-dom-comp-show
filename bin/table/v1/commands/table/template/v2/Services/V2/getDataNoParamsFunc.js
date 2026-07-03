const getDataNoParamsFunc = async ({ inEndPoint, inOnReadFail }) => {
    const res = await fetch(inEndPoint);
    // console.log("status", res.status);
    // console.log("res.ok", res.ok);
    // console.log("inOnReadFail", inOnReadFail);
    if (!res.ok) {
        if (inOnReadFail) {
            inOnReadFail(res.status);
        };
    };

    return await res.json();
};

export default getDataNoParamsFunc;