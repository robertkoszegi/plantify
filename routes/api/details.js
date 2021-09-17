// routes/api/orders.js

const express = require('express');
const router = express.Router();
const detailCtrl = require('../../controllers/details');

// POST new order. Full address will be POST /api/orders
// router.post('/', orderCtrl.create)
// GET /api/orders
router.get('/details', detailCtrl.index)

module.exports = router;