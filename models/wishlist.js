const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    wishLineItems: [{
        qty: Number, 
        name: String,
        price: Number,
        waterFreq: String,
        sunCond: [String],
        petFriendly: Boolean,
        category: {type: Schema.Types.ObjectId, ref: 'Category'},
        
    }],
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, {
    timestamps: true,
});


let WishlistModel = mongoose.model('Wishlist', wishlistSchema);

module.exports = WishlistModel;