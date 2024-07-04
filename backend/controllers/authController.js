const bcrypt = require('bcryptjs');
const User = require('../models/User.js');
const generateToken = require('../utils/generateToken.js');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findByEmail(email);

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userId = await User.create(username, email, hashedPassword);

  const user = await User.findById(userId);

  res.status(201).json({
    _id: user.id,
    username: user.username,
    email: user.email,
    token: generateToken(user.id)
  });
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findByEmail(email);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

const getProfile = (req, res)=>{
  const {username, email} = req.user
  res.status(200).send({username, email})
}

module.exports = { registerUser, authUser, getProfile };
