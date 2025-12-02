require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const itemsRoute = require('./routes/items');
const usersRoute = require('./routes/users');
const ordersRoute = require('./routes/orders');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRoute);
app.use('/api/users', usersRoute);
app.use('/api/orders', ordersRoute);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
