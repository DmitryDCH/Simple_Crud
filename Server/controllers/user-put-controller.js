const { updateUser } = require('../models/user-model');

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const toUpdate = req.body;
  const updatedUser = await updateUser(id, toUpdate);
  res.status(200).send({
    message: 'Success',
    updatedUser,
  });
};
