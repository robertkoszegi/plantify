const WishlistModel = require('../models/wishlist.js');

module.exports = {
    create,
    index,
    // remove
}

async function index(req, res) {
    try {
        // 1. grab all items from DB, sorted by date descending (being fancy!)
    let wishlist = await WishlistModel.find({user: req.user._id}).exec();
        // 2. send to frontend
        console.log("this is wishlist",wishlist)
        res.status(200).json(wishlist)    
    } catch(err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        console.log("This is wishlist",req.user)
       let wishlist = await WishlistModel.create({
            wishLineItems: req.body.wishLineItems,
            user: req.user._id});
        res.status(200).json()
    } catch(err) {
        console.log(err.message)
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