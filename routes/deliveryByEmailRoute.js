const express = require('express');

const router = express.Router();

const deliveryByEmail = require('../controllers/deliveryByEmailController');

router.get('/users/:email', deliveryByEmail.getDeliveryByEmailInfo);

module.exports = router;