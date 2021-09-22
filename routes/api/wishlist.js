const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../../controllers/wishlists');

router.get('/', wishlistCtrl.index)
router.post('/', wishlistCtrl.create)


// router.get('/', wishlistCtrl.remove)

module.exports = router;