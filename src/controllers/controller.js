const e = require('express');
const services = require('../services/services');
const utils = require('../utils');
const generateUniqueRoomIdController = (req, res) => {
    console.log('Entering generate room id controller ');
    try {
        const roomId = services.generateUniqueRoomIdService();
        res.send({ roomId });
    } catch (err) {
        utils.sendErrorMessage(
            res,
            400,
            'Failed to genereate the ID for the room'
        );
        console.error(err);
    } finally {
        console.log('Exiting generate room id controller');
    }
};

module.exports = {
    generateUniqueRoomIdController,
};
