const { Schema, Model } = require('mongoose');

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

const userModel = Model('users', userSchema);

const getUserById = async (id) => {

};

const getAllUsers = async () => {

};

const updateUser = async (id) => {

};

const deleteUser = async (id) => {

};

const createUser = async () => {

};

module.exports = {
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  userModel,
};
