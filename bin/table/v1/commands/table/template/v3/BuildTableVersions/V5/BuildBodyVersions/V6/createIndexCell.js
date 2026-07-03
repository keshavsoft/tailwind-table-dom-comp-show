const createIndexCell = ({ index, inWidth }) => {
    const td = document.createElement("td");
    td.className = "px-4 py-2 border text-right";
    td.textContent = index + 1;
    td.style.width = "50px";

    if (inWidth) {
        td.style.width = inWidth;
    };

    return td;
};

export { createIndexCell };