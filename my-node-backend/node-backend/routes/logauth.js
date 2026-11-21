const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Route: POST /api/login
// Body: { email, password }
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.json({
      msg: 'Login successful',
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
