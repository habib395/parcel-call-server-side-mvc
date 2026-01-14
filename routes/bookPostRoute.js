const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookPostController');

router.post('/book', bookController.postBookInfo);

module.exports = router;