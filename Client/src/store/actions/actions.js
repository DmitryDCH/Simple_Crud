import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  DELETE_USER,
  UPDATE_USER_BY_ID,
  CREATE_USER,
} from '../saga-effects/saga-actions-type';

const getAllUsers = () => {
  return {
    type: GET_ALL_USERS,
  }
}

const getUserById = (id) => {
  return {
    type: GET_USER_BY_ID,
    id,
  }
}

const deleteUserById = (id) => {
  return {
    type: DELETE_USER,
    id,
  }
}

const updateUser = (id, body) => {
  return {
    type: UPDATE_USER_BY_ID,
    id,
    body,
  }
};

const addUser = (addUser) => {
  return {
    type: CREATE_USER,
    addUser,
  }
};

export {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  addUser,
}