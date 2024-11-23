const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/generateroomid', (req, res) => {
    console.log('Entering generate room id route');
    controller.generateUniqueRoomIdController(req, res);
    console.log('Exiting generate room id route');
});

module.exports = router;
