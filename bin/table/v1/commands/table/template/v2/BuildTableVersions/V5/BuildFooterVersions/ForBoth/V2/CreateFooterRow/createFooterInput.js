// createFooterInput.js

const createFooterInput = ({ key, onChangeFunc, showDataList, inColumnsConfig,
    inDefaultValue, inClasses, inOnChangeType, inOnKeyDown = false,
    inOnKeyDownType
}) => {
    
    const input = document.createElement("input");

    input.type = "text";
    input.placeholder = key;
    input.name = key;
    input.className = "w-full px-2 py-1 border rounded text-md";

    if (inOnChangeType) input.dataset.onChangeType = inOnChangeType;

    const findColumn = inColumnsConfig.find(element => {
        return element.columnName === key;
    });

    if (showDataList && findColumn?.tableFooterDataListShow) {
        input.setAttribute("list", `${key}List`);
        input.dataset.dataListSource = findColumn.dataListSource;
    };

    if (inDefaultValue !== undefined) {
        // default value is inserted in input value
        input.value = inDefaultValue;
        //need to add to dataset also for further use, like clear values
        input.dataset.defaultValue = inDefaultValue;
    };
    // debugger;
    // console.log(" : ", onChangeFunc);

    if (onChangeFunc) {
        input.addEventListener(
            "change", (event) => {
                const localCurrentTarget = event.currentTarget;
                const onChangeType = localCurrentTarget.dataset.onChangeType;

                // console.log("onChangeType : ", localCurrentTarget, localCurrentTarget.dataset, onChangeType);

                onChangeFunc({
                    inCurrentTarget: localCurrentTarget,
                    inChangeType: onChangeType
                });
            }
        );
    };

    if (inOnKeyDown) {
        input.addEventListener(
            "keydown", (event) => {
                if (event.key === "Enter") {
                    const localCurrentTarget = event.currentTarget;
                    // const closestTr = localCurrentTarget.closest("tr");
                    const currentTd = event.currentTarget.closest("td");
                    const nextInput = currentTd?.nextElementSibling?.querySelector("input");

                    if (nextInput) {
                        nextInput.focus();
                    };

                    // console.log("Enter pressed");
                };
            }
        );
    };

    return input;
};

export { createFooterInput };