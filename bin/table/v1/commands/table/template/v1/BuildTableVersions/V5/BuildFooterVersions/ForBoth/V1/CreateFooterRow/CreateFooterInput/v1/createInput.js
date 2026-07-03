const createInput = ({ key }) => {
    const input = document.createElement("input");

    input.type = "text";
    input.placeholder = key;
    input.name = key;
    input.className = "w-full px-2 py-1 border rounded text-md";

    return input;
};

export default createInput;