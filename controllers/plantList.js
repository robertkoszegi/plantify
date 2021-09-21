// import the Order Model. I'm calling this OrderModel for clarity, but typically this variable is called Order
const PlantModel = require('../models/plant.js'); 

module.exports = {
    index,
}

async function index(req, res) {
  try {
    
    let plants = await PlantModel.find({}).exec();
    
    res.status(200).json(plants)         
  } catch(err) {
    res.status(400).json(err);
  }
}



