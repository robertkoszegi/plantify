const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../../controllers/wishlists');

router.post('/', wishlistCtrl.create);
router.get('/', wishlistCtrl.index);

module.exports = router;