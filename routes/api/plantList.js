// routes/api/orders.js

const express = require('express');
const router = express.Router();
const plantListCtrl = require('../../controllers/plantList');

// POST new order. Full address will be POST /api/orders
// router.post('/', orderCtrl.create)
// GET /api/orders
router.get('/', plantListCtrl.index)
router.get('/categories', plantListCtrl.catIndex),

module.exports = router;