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
}, {
  timestamps: false,
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

const updateUser = async (id, updateObj) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, {
      ...updateObj,
    });
    return updatedUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    return error;
  }
};

const createUser = async ({
  name,
  surname,
  nickname,
  email,
  password,
}) => {
  try {
    const createdUser = await userModel.create({
      name,
      surname,
      nickname,
      email,
      password,
    });
    return createdUser;
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
