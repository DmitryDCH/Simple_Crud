const { deleteUser } = require('../models/user-model');

exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  res.status(200).send({
    message: 'Success delete',
    deletedUser,
  });
};
