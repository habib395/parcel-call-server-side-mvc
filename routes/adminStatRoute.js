const express = require('express');
const router = express.Router();
const adminStatController = require('../controllers/adminStatController');

router.get('/adminStat', adminStatController.getAdminStatInfo);

module.exports = router;