// routes/api/orders.js

const express = require('express');
const router = express.Router();
const plantListCtrl = require('../../controllers/plantList');

router.get('/', plantListCtrl.index)
router.get('/categories', plantListCtrl.catIndex),

module.exports = router;