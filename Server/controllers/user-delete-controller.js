const { deleteUser } = require('../models/user-model');

exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).send({
      message: 'Success delete',
      deletedUser,
    });
  } catch (error) {
    res.status(500).send({ message: 'Problem in delete controller', error });
  }
};
