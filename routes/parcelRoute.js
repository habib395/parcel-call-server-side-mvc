const express = require('express');
const router = express.Router();
const parcelController = require('../controllers/parcelController');

router.get('/parcels', parcelController.getParcelInfo);

module.exports = router;