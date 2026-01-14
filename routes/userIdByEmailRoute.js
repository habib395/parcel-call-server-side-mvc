const express = require('express');

const router = express.Router();

const getUserIdInfo = require('../controllers/userIdByEmailController');

router.get('/userId/:email', getUserIdInfo.getUserIdByEmail);

module.exports = router;