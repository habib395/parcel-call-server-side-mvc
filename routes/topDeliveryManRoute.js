const express = require('express');
const router = express.Router();
const topDeliveryManInfo = require('../controllers/topDeliveryManController');

router.get('/topDeliveryMan', topDeliveryManInfo.getTopDeliveryMan);

module.exports = router;

