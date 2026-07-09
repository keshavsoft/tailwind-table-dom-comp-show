import buildShowHandler from "../handlerFuncs/v2/buildShowHandler.js";

const initHandlers = ({
    inCallBack
}) => {
    const showFunc = buildShowHandler({ inCallBack });

    return {
        onShow: ({ item, index, presentPk, updatedItem }) => showFunc({ item, index, presentPk, updatedItem }),
    };
};

export default initHandlers;
