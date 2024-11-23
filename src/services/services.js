const { v4: uuidv4 } = require('uuid');

const generateUniqueRoomIdService = () => {
    console.log('Entering generate room id service ');
    console.log('Exiting generate room id service ');
    return uuidv4();
};

module.exports = {
    generateUniqueRoomIdService,
};
