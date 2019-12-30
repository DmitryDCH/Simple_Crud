const { getAllUsers, getUserById } = require('../models/user-model');

exports.getAllUsers = async (req, res) => {
  const users = await getAllUsers();
  res.status(200).send(users);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  res.status(200).send(user);
};
