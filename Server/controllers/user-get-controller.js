const { getAllUsers, getUserById } = require('../models/user-model');

exports.getAllUsers = async (req, res) => {
  res.send({ message: 'On get all users' });
};

exports.getUserById = async (req, res) => {
  res.send({ message: 'On get user by id' });
};
