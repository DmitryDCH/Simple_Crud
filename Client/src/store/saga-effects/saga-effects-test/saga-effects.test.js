// Expect from library
import {
  expectSaga,
} from 'redux-saga-test-plan';

// Call from saga
import {
 call,
} from 'redux-saga/effects';

// Redusers 
import allUserReducer from '../../reducers/all-user-reducer';
import userReducer from '../../reducers/user-reducer';

// Saga
import {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  createUser,
} from '../saga-effects';

// Api
import {
  getAllUsers_request,
  getUserById_request,
  deleteUser_request,
  updateUser_request,
  addUser_request,
} from '../../../services/user-service';


it('Should get users from server', async () => {

  const addUser = {
    name: 'Dima',
    surname: 'Check',
    nickname: 'WebTrust',
    email: 'chekrkov@gmail.com',
    password: '123123qwe321'
  }

  const newUserCreate = await addUser_request(addUser);
  const { createdUser } = newUserCreate;
  const idUser = {
    id: createdUser._id,
  }

  const initialState = [];

  const users =  expectSaga(getAllUsers)
    .provide([call(getAllUsers_request)])
    .withReducer(allUserReducer, initialState)

    const result = await users.run();
    // if length === 0 or server is off - result = false
    expect(result.storeState.length > 0).toBe(true);

    await deleteUser_request(idUser.id);

});

it('Should get user by id', async () => {
  const initialState = {};

  const addUser = {
    name: 'Dima',
    surname: 'Check',
    nickname: 'WebTrust',
    email: 'chekrkov@gmail.com',
    password: '123123qwe321'
  }

  const newUserCreate = await addUser_request(addUser);
  const { createdUser } = newUserCreate;

  const idUser = {
    id: createdUser._id,
  }

  const user = expectSaga(getUserById, idUser)
    .provide([call(getUserById_request)])
    .withReducer(userReducer, initialState)

    const result = await user.run();
    delete result.storeState._id;
    expect(result.storeState).toStrictEqual(addUser);

    await deleteUser_request(idUser.id);

});

it('Should create new user', async () => {

  const newUser = {
    addUser: {
      name: 'Dima',
      surname: 'Check',
      nickname: 'WebTrust',
      email: 'chekrkov@gmail.com',
      password: '123123qwe321'
    }
  }

  const addingUser = expectSaga(createUser, newUser)
    .provide([call(addUser_request)])
    .withReducer(allUserReducer, [])

  const result = await addingUser.run();
  const { _id, ...infoForExpect } = result.storeState[0];
  expect(infoForExpect).toStrictEqual(newUser.addUser);

  // we create new user and after success test -> delete this user
  await deleteUser_request(_id);

});

it('Should delete user from db', async () => {

  const addUser = {
    name: 'Dima',
    surname: 'Check',
    nickname: 'WebTrust',
    email: 'chekrkov@gmail.com',
    password: '123123qwe321'
  }

  const newUserCreate = await addUser_request(addUser);
  const { createdUser } = newUserCreate;
  const idUser = {
    id: createdUser._id,
  }

  const deletedUser = expectSaga(deleteUser, idUser)
    .provide([call(deleteUser_request)])
    .withReducer(allUserReducer, [])

    const result = await deletedUser.run();
    // user was created and deleted in server log
    expect(result.storeState).toStrictEqual([]);
});



it('Should update user', async () => {

  const addUser = {
    name: 'Dima',
    surname: 'Check',
    nickname: 'WebTrust',
    email: 'chekrkov@gmail.com',
    password: '123123qwe321',
  }

  const newUserCreate = await addUser_request(addUser);
  const { createdUser } = newUserCreate;

  const info = {
    id: createdUser._id,
    body: {
      name: 'grade',
      surname: 'Upgrade',
      nickname: 'Upgrade',
      email: 'Upgrade@gmail.com',
      password: '123123qwe321',
    }
  }

  const initialState = {};

  const updatedUser = expectSaga(updateUser, info)
    .provide([call(updateUser_request)])
    .withReducer(userReducer, initialState)

    const result = await updatedUser.run();
    expect(result.storeState).toStrictEqual(info.body);

    await deleteUser_request(info.id);

});