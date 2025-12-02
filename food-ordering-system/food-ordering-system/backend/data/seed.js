require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('../models/Item');

const items = [
  { name: 'Paneer Butter Masala', price: 180, restaurant: 'Spice Hub' },
  { name: 'Margherita Pizza', price: 250, restaurant: 'Pizza Palace' },
  { name: 'Veg Biryani', price: 150, restaurant: 'Biryani House' }
];

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(async () => {
    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log('Seeded items');
    process.exit();
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
