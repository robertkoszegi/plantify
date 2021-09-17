const DetailModel = require('../models/detail.js'); //implemnet model

module.exports = {
    index,
}

async function index(req, res){
    try{
        let details = await DetailModel.find({plantDetails: req.plant.name})
        res.status(200).json(details)
    } catch(err){
        res.status(400).json(err);
    }
}