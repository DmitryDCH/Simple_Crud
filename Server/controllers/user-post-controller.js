const { createUser } = require('../models/user-model');

exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    const createdUser = await createUser(userData);
    res.status(200).send({
      message: 'Success',
      createdUser,
    });
  } catch (error) {
    res.status(500).send({ message: 'Problem with create user controller', error });
  }
};
