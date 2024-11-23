const sendSuccessResponse = (res, obj) => {
    res.send(obj);
};

const sendErrorMessage = (res, statusCode, message) => {
    res.status(statusCode);
    res.send({ message });
};

module.exports = {
    sendErrorMessage,
    sendSuccessResponse,
};
