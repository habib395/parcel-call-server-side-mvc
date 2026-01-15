const express = require('express');

const router = express.Router();

const userByRoleController = require('../controllers/userDeliveryByRoleController');

router.get('/users/delivery/:role', userByRoleController.getUserByRole);

module.exports = router;