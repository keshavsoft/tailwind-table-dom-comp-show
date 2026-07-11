import buildShowHandler from "../handlerFuncs/v2/buildShowHandler.js";

const initHandlers = ({
    inEditCallBack, inShowCallBack
}) => {
    const showFunc = buildShowHandler({ inCallBack: inShowCallBack });
    const editFunc = buildShowHandler({ inCallBack: inEditCallBack });

    return {
        onShow: ({ item, index, presentPk, updatedItem }) => showFunc({ item, index, presentPk, updatedItem }),
        onEdit: ({ item, index, presentPk, updatedItem }) => editFunc({ item, index, presentPk, updatedItem })
    };
};

export default initHandlers;
