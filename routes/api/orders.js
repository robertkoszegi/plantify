
const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/orders');

// POST new order
router.post('/', orderCtrl.create);

// GET /api/order
router.get('/', orderCtrl.index);

module.exports = router