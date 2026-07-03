const appendFooterSaveCell = ({ inOnSaveFunc }) => {
    // debugger
    if (!inOnSaveFunc) return;

    const td = document.createElement("td");
    td.className = "px-4 py-2 border";
    td.style.width = "100px";

    const btn = document.createElement("button");
    btn.textContent = "Save";
    btn.className = "px-3 py-1 bg-green-500 text-white rounded";

    btn.onclick = (e) => {
        e.preventDefault(); // 🔥 THIS IS THE KEY
        // debugger;
        const currentTarget = e.currentTarget;
        const closestFooter = currentTarget.closest("tfoot");
        const inputs = closestFooter.querySelectorAll("input");
        
        const data = {};

        inputs.forEach((input) => {
            data[input.name] = input.value;
        });

        inOnSaveFunc({
            dataFromDom: data, inCurrentTarget: currentTarget,
        });
    };

    td.appendChild(btn);
    // debugger
    return td;
};

export { appendFooterSaveCell };