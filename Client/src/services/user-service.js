import Request_Service from './request';

const userPath = 'users';

const getAllUsers_request = async () => {
  return await Request_Service.get(userPath);
};

const getUserById_request = async (id) => {
  return await Request_Service.get(`${userPath}/${id}`);
}

const deleteUser_request = async (id) => {
  return await Request_Service.delete(`${userPath}/${id}`);
}


export {
  getAllUsers_request,
  getUserById_request,
  deleteUser_request
};