const express = require("express");

const router = express.Router();

const getReviewsForDeliveryManController = require("../controllers/getReviewById");

router.get(
  "/review/:deliveryManId",
  getReviewsForDeliveryManController.getReviewsByDeliveryManId
);

module.exports = router;
