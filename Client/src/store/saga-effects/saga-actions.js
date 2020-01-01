import {
  PUT_USERS,
  PUT_USER,
  PUT_DELETE_USER,
  PUT_UPDATE_USER,
  PUT_CREATE_USER,
} from './saga-actions-type';


const putAllUsers = (users) => {
  return {
    type: PUT_USERS,
    users,
  }
}

const putSignleUser = (user) => {
  return {
    type: PUT_USER,
    user,
  }
}

const putInfoAboutDeleteUser = (deleteUser) => {
  return {
    type: PUT_DELETE_USER,
    deleteUser,
  }
}

const putUpdateUser = (updatedUser, id) => {
  return {
    type: PUT_UPDATE_USER,
    updatedUser,
    id,
  }
}

const putCreatedUser = (createdUser) => {
  return {
    type: PUT_CREATE_USER,
    createdUser,
  }
}


export {
 putAllUsers,
 putSignleUser,
 putInfoAboutDeleteUser,
 putUpdateUser,
 putCreatedUser,
};