import focusNextInput from "./focusNextInput.js";

import executeKeyDownType from "./ExecuteKeyDownType/v2/start.js";

const attachKeyDownEvent = ({
    input,
    inOnKeyDown,
    inOnKeyDownType,
    inDefaultRow
}) => {
    if (!inOnKeyDown) return;

    input.addEventListener(
        "keydown",
        (event) => {
            if (event.key !== "Enter") return;
            // console.log("aaaaaaaaaaa : ", event.isTrusted);

            const currentInput = event.currentTarget;

            executeKeyDownType({
                currentInput,
                inOnKeyDownType,
                inDefaultRow
            });

            if (event.isTrusted) {
                focusNextInput({
                    currentInput
                });
            };
        }
    );
};

export default attachKeyDownEvent;