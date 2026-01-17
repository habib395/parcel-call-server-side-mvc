const express =  require('express');

const router = express.Router();

const deleteBookInfo = require('../controllers/deleteBookController');

router.delete('/books/:id', deleteBookInfo.deleteBookInfo);

module.exports = router;