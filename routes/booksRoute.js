const express = require('express');
const router = express.Router();
const booksController = require('../controllers/bookController');

router.get('/books', booksController.getBooksInfo);

module.exports = router;