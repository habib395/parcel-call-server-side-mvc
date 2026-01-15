const express = require('express');

const router = express.Router();

const userIdEmailController = require('../controllers/userIdEmailController');

router.get('/user/id/:email', userIdEmailController.getUserIdEmailInfo);

module.exports = router;