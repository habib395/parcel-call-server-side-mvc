const express = require('express');

const router = express.Router();

const bookEmailByIdController = require('../controllers/bookEmailIdController');

router.get('/books/:email/:id', bookEmailByIdController.getBookEmailById);

module.exports = router;