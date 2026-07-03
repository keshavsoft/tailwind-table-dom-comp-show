const createTH = ({
    inKey,
    inClassName,
    inWidth
}) => {

    const th = document.createElement("th");

    if (inClassName) {

        th.className = inClassName;

    } else {

        th.className =
            "px-6 py-3 text-left border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer";

    };

    if (inWidth) {
        th.style.width = inWidth;
        th.style.maxWidth = inWidth;
    };

    th.dataset.key = inKey;

    return th;

};

export { createTH };