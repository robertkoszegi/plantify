const PlantModel = require('../models/plant.js'); 
const CatModel = require('../models/category.js');

module.exports = {
    index,
    catIndex,
}

async function index(req, res) {
  try {
    // 1. grab all items from DB, 
    let plants = await PlantModel.find({}).exec();
    
    res.status(200).json(plants)         
  } catch(err) {
    res.status(400).json(err);
  }
}

async function catIndex(req, res){
  try {
    let cats = await CatModel.find({}).exec();
    res.status(200).json(cats)
  } catch(err) {
    res.status(400).json(err);
  }
}

