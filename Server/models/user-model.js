const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
});

const userModel = model('users', userSchema);

const getUserById = async (id) => {
  try {
    return await userModel.findOne({ _id: id });
  } catch (error) {
    return error;
  }
};

const getAllUsers = async () => {
  try {
    return await userModel.find({ });
  } catch (error) {
    return error;
  }
};

const updateUser = async (id) => {
  try {
    // todo
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await userModel.findByIdAndDelete(id);
    return user;
  } catch (error) {
    return error;
  }
};

const createUser = async () => {
  try {
    // todo
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  userModel,
};
