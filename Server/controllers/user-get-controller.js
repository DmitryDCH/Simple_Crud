const { getAllUsers, getUserById } = require('../models/user-model');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: 'Problem with get all users controller', error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Problem with getUserById controller', error });
  }
};
