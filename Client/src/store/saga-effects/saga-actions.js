const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_USER_BY_ID = 'GET_USER_BY_ID';
const UPDATE_USER_BY_ID = 'UPDATE_USER_BY_ID';
const CREATE_USER = 'CREATE_USER';
const DELETE_USER = 'DELETE_USER';

const PUT_USERS = 'PUT_USERS';
const PUT_USER = 'PUT_USERS';
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
}