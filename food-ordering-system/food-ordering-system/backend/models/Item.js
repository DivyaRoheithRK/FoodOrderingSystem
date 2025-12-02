const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  restaurant: { type: String, required: true },
  image: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Item', ItemSchema);
