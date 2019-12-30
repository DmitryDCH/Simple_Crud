const { createUser } = require('../models/user-model');

exports.createUser = async (req, res) => {
  const userData = req.body;
  const createdUser = await createUser(userData);
  res.status(200).send({
    message: 'Success',
    createdUser,
  });
};
