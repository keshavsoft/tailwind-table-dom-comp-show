const attachChangeEvent = ({
    input,
    onChangeFunc
}) => {
    if (!onChangeFunc) return;

    input.addEventListener(
        "change",
        (event) => {
            const localCurrentTarget =
                event.currentTarget;

            const onChangeType =
                localCurrentTarget.dataset.onChangeType;

            onChangeFunc({
                inCurrentTarget: localCurrentTarget,
                inChangeType: onChangeType
            });
        }
    );
};

export default attachChangeEvent;