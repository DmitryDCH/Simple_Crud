const { updateUser } = require('../models/user-model');

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const toUpdate = req.body;
    const updatedUser = await updateUser(id, toUpdate);
    res.status(200).send({
      message: 'Success',
      updatedUser,
    });
  } catch (error) {
    res.status(500).send({ message: 'Problem with update user controller', error });
  }
};
