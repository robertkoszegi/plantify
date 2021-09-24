const OrderModel = require('../models/order.js');

module.exports = {
    create,
    index,
}

async function index(req, res) {
    try {
        let orders = await OrderModel.find( {user: req.user._id}).sort({createdAt:'desc'}).exec();
        res.status(200).json(orders)    
    } catch(err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        let orders = await OrderModel.create({
            lineItems: req.body.lineItems, 
            paid: req.body.paid, 
            user: req.user._id, 
            total: req.body.total});
        res.status(200).json()
    } catch(err) {
        res.status(400).json(err)
    }
}