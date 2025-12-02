const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    user = new User({ name, email, phone });
    await user.save();
  }
  res.json(user);
});

module.exports = router;
