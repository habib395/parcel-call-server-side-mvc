const express = require('express');

const router = express.Router();

const patchStatusByIdInfo = require('../controllers/parcelStatusByIdController');

router.patch('/parcel/status/:id', patchStatusByIdInfo.patchParcelStatusByIdInfo);

module.exports = router;