const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

router.get('/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

module.exports = router;
