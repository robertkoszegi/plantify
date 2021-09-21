// routes/api/orders.js

const express = require('express');
const router = express.Router();
const recommendationsCtrl = require('../../controllers/recommendations');

router.post('/', recommendationsCtrl.index)

module.exports = router;