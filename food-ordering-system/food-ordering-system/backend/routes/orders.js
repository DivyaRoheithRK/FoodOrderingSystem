const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Item = require('../models/Item');

router.post('/', async (req, res) => {
  try {
    const { userId, items } = req.body;
    let totalPrice = 0;
    for (const it of items) {
      const itemDoc = await Item.findById(it.itemId);
      totalPrice += (itemDoc.price || 0) * (it.quantity || 1);
    }
    const order = new Order({
      user: userId,
      items: items.map(i => ({ item: i.itemId, quantity: i.quantity })),
      totalPrice
    });
    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  const orders = await Order.find().populate('user').populate('items.item');
  res.json(orders);
});

module.exports = router;
