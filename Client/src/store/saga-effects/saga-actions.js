const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_USER_BY_ID = 'GET_USER_BY_ID';
const UPDATE_USER_BY_ID = 'UPDATE_USER_BY_ID';
const CREATE_USER = 'CREATE_USER';
const DELETE_USER = 'DELETE_USER';

const PUT_USERS = 'PUT_USERS';
const PUT_USER = 'PUT_USER';
const PUT_UPDATE_USER = 'PUT_UPDATE_USER';
const PUT_CREATE_USER = 'PUT_CREATE_USER';
const PUT_DELETE_USER = 'PUT_DELETE_USER';

const getAllUsers = () => {
  return {
    type: GET_ALL_USERS,
  }
}

const putAllUsers = (users) => {
  return {
    type: PUT_USERS,
    users
  }
}

const getUserById = (id) => {
  return {
    type: GET_USER_BY_ID,
    id
  }
}

const putSignleUser = (user) => {
  return {
    type: PUT_USER,
    user
  }
}

const deleteUserById = (id) => {
  return {
    type: DELETE_USER,
    id,
  }
}

const putInfoAboutDeleteUser = (deleteUser) => {
  return {
    type: PUT_DELETE_USER,
    deleteUser,
  }
}

const updateUser = (id, body) => {
  return {
    type: UPDATE_USER_BY_ID,
    id,
    body,
  }
};

const putUpdateUser = (updatedUser) => {
  return {
    type: PUT_UPDATE_USER,
    updatedUser,
  }
}


export {
 GET_ALL_USERS,
 GET_USER_BY_ID,
 UPDATE_USER_BY_ID,
 CREATE_USER,
 DELETE_USER,
 PUT_USERS,
 PUT_USER,
 PUT_UPDATE_USER,
 PUT_CREATE_USER,
 PUT_DELETE_USER,
 getAllUsers,
 putAllUsers,
 getUserById,
 putSignleUser,
 deleteUserById,
 putInfoAboutDeleteUser,
 updateUser,
 putUpdateUser,
}