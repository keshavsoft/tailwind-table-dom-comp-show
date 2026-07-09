import focusNextInput from "./focusNextInput.js";
// import executeKeyDownType from "./executeKeyDownType.js";

import executeKeyDownType from "./ExecuteKeyDownType/start.js";

const attachKeyDownEvent = ({
    input,
    inOnKeyDown,
    inOnKeyDownType
}) => {
    if (!inOnKeyDown) return;

    input.addEventListener(
        "keydown",
        (event) => {
            if (event.key !== "Enter") return;

            const currentInput = event.currentTarget;

            executeKeyDownType({
                currentInput,
                inOnKeyDownType
            });

            focusNextInput({
                currentInput
            });
        }
    );
};

export default attachKeyDownEvent;