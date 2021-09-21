// routes/api/orders.js

const express = require('express');
const router = express.Router();
const recommendationsCtrl = require('../../controllers/recommendations');

// POST new order. Full address will be POST /api/orders
// router.post('/', orderCtrl.create)
// GET /api/orders
router.post('/', recommendationsCtrl.index)

module.exports = router;