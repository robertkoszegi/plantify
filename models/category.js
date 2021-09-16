const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
});

let CategoryModel = mongoose.model('Category', categorySchema);
module.exports = CategoryModel;