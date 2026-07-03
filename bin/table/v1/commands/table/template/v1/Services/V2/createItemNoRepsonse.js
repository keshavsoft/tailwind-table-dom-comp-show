const startFunc = async ({ inEndPoint, payload, inOnReadFail }) => {
    const res = await fetch(inEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        if (inOnReadFail) {
            inOnReadFail(res.status);
        };
    };

    return await res;
};

export default startFunc;