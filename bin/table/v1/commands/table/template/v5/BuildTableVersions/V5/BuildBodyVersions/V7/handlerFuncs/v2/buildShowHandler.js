const buildDeleteHandler = ({ inCallBack }) => {
    const localDeleteHandler = async (options) => {
        // console.log("options----------- : ", options);
        inCallBack(options);
    };

    return localDeleteHandler;
};

export default buildDeleteHandler;
