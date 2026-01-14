const express = require('express');

const router = express.Router();

const parcelController = require('../controllers/postParcelController');

router.post('/users/:email', parcelController.postParcelInfo);

module.exports = router;