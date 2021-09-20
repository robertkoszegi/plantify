// import the Order Model. I'm calling this OrderModel for clarity, but typically this variable is called Order
const PlantModel = require('../models/plant.js'); 

module.exports = {
    index,
}

async function index(req, res) {
  try {
    // 1. grab all items from DB, sorted by date descending (being fancy!)
    let plants = await PlantModel.find({}).exec();
    // 2. send to frontend
    res.status(200).json(plants)         
  } catch(err) {
    res.status(400).json(err);
  }
}

