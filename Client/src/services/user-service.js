import Request_Service from './request';

const getAllUsers_request = async () => {
  return await Request_Service.get('users');
};


export {
  getAllUsers_request,
};