const WishlistModel = require('../models/wishlist.js');

module.exports = {
    create,
    index,
    // remove
}

async function index(req, res) {
    try {
    let wishlist = await WishlistModel.findById({user: req.user._id}).exec();
        res.status(200).json(wishlist)    
    } catch(err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
       let wishlist = await WishlistModel.create({
            wishLineItems: req.body.wishLineItems,
            user: req.user._id});
        res.status(200).json(wishlist)
    } catch(err) {
        res.status(400).json(err)
    }
}

// async function remove(req, res){
//     try{
//         await WishlistModel.findOneAndDelete({wishLineItems: req.body.name})
//         res.status(200).json('ok')
//     } catch(err){
//         res.status(400).json(err)
//     }
// }