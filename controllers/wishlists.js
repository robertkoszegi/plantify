const WishlistModel = require('../models/wishlist.js');

module.exports = {
    create,
    index,
    remove
}

async function index(req, res) {
    try {
        // 1. grab all items from DB, sorted by date descending (being fancy!)
    let wishlist = await WishlistModel.find({}).exec();
        // 2. send to frontend
        res.status(200).json(wishlist)    
    } catch(err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        await WishlistModel.create({wishLineItems: req.body.wishLineItems})
        res.status(200).json('ok')
    } catch(err) {
        res.status(400).json(err)
    }
}

async function remove(req, res){
    try{
        await WishlistModel.deleteOne(req.params.name)
        res.status(200).json('ok')
    } catch(err){
        res.status(400).json(err)
    }
}