const attachKeyDownEvent = ({
    input,
    inOnKeyDown,
    inOnKeyDownType
}) => {
    if (!inOnKeyDown) return;

    const focusNextInput = ({ currentInput }) => {
        const allInputs = [
            ...currentInput
                .closest("tr")
                .querySelectorAll("input")
        ];

        const index = allInputs.indexOf(currentInput);

        if (
            index !== -1 &&
            index < allInputs.length - 1
        ) {
            allInputs[index + 1].focus();
        }
    };

    const executeKeyDownType = ({
        currentInput
    }) => {
        const closestTr = currentInput.closest("tr");

        switch (inOnKeyDownType) {
            case "Amount":
                const qty = Number(
                    closestTr.querySelector('[name="Qty"]').value
                );

                const amount = Number(
                    closestTr.querySelector('[name="Amount"]').value
                );

                closestTr.querySelector('[name="Rate"]').value =
                    qty ? amount / qty : 0;

                break;

            default:
                break;
        }
    };

    input.addEventListener(
        "keydown",
        (event) => {
            if (event.key !== "Enter") return;

            const currentInput =
                event.currentTarget;

            executeKeyDownType({
                currentInput
            });

            focusNextInput({
                currentInput
            });
        }
    );
};

export default attachKeyDownEvent;