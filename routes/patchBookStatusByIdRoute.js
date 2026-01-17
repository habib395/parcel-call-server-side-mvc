const express = require('express');

const router = express.Router();

const patchUserStatusByRole = require('../controllers/patchBookStatusByIdController');

router.patch('/book/status/:id', patchUserStatusByRole.patchBookStatusController);

module.exports = router;
