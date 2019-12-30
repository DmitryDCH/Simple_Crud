const { deleteUser } = require('../models/user-model');

exports.deleteUserById = (req, res) => {
  res.send({ message: 'On delete user' });
};
