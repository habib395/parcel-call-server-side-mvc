const express = require('express');

const router = express.Router();

const putBookIdController = require("../controllers/putBookIdController");

router.put('/books/:id', putBookIdController.putBookIdInfo);

module.exports = router;