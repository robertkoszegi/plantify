const PlantModel = require('../models/plant.js');

module.exports = {
    index
}

async function index(req, res) {
  try {
    // grab all plants from db that match quiz answers
    let plants = await PlantModel.find({
        sunCond: req.body.sun, 
        price: {$lt: req.body.price}, 
        waterFreq: req.body.water, 
        petFriendly: req.body.pet
      }).exec();
    // send result to frontend
    res.status(200).json(plants)         
  } catch(err) {
    res.status(400).json(err);
  }
}