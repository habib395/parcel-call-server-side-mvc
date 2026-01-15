const express = require('express');

const router = express.Router();

const userRoleController = require('../controllers/userRoleByEmailController');

router.get('/users/role/:email', userRoleController.getUserRoleByEmail);

module.exports = router;