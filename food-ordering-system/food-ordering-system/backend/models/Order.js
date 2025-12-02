const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: Number,
  status: { type: String, default: 'placed' }
}, { timestamps: true });
module.exports = mongoose.model('Order', OrderSchema);
