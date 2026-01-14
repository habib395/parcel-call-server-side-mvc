const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewPostController');

router.post('/review', reviewController.postReviewInfo);

module.exports = router;