const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const plantSchema = new Schema({
  name: String,
  price: Number,
  waterFreq: String,
  sunCond: [String],
  petFriendly: Boolean,
  image: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
});

let PlantModel = mongoose.model('Plant', plantSchema)
module.exports = PlantModel;