const { updateUser } = require('../models/user-model');

exports.updateUser = async (req, res) => {
  res.send({ message: 'On update user' });
};
