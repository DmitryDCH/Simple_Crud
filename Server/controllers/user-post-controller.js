const { createUser } = require('../models/user-model');

exports.createUser = async (req, res) => {
  res.send({ message: 'On create user' });
};
