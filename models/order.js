const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    lineItems: [{
        qty: Number, 
        item: {
            name: String,
            price: Number,
            waterFreq: String,
            sunCond: String,
            petFriendly: Boolean,
            category: {type: Schema.Types.ObjectId, ref: 'Category'},
        },
    }],
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, {
    timestamps: true,
});

let OrderModel = mongoose.model('Order', orderSchema);
module.exports = OrderModel