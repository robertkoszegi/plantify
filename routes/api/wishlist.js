const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../../controllers/wishlists');

router.get('/show', wishlistCtrl.index)
router.post('/create', wishlistCtrl.create)
router.post('/delete', wishlistCtrl.remove)

// router.get('/', wishlistCtrl.remove)

module.exports = router;