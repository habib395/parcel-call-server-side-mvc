const express = require('express');

const router = express.Router();

const patchUserRoleInfo = require('../controllers/patchUserRoleByEmailController');

router.patch('/user/role/:email', patchUserRoleInfo.patchUserRoleByEmailController);

module.exports = router;