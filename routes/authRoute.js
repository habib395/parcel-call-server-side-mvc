const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

router.get('/jwt', authController.createTokenController);

module.exports = router;