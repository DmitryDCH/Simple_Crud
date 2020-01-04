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
  updateUser
} from '../saga-effects';

// Api
import {
  getAllUsers_request,
  getUserById_request,
  deleteUser_request,
  updateUser_request
} from '../../../services/user-service';


it('Should get users from server', async () => {
  const initialState = [];

  const users =  expectSaga(getAllUsers)
    .provide([call(getAllUsers_request)])
    .withReducer(allUserReducer, initialState)

    const result = await users.run();

    expect(result.storeState.length > 0).toBe(true);
});

it('Should get user by id', async () => {
  const initialState = {};

  const id = '5e0cfe1a115ff3494c51946f';

  const userWithCurrentid = { 
    _id: '5e0cfe1a115ff3494c51946f',
    name: 'Dima',
    surname: 'Check',
    nickname: 'WebTrust',
    email: 'churkov@gmail.com',
    password: '123123qwe321'
  };

  const user = expectSaga(getUserById, { id })
    .provide([call(getUserById_request)])
    .withReducer(userReducer, initialState)

    const result = await user.run();
    expect(result.storeState).toStrictEqual(userWithCurrentid);

});

// it('Should delete user from db', async () => {

//   const userId = {
//     id: '321',
//   }

//   let defaultUser = {
//     id: '321',
//     name: 'Alex',
//     surname: 'Smith',
//     nickname: 'Gross',
//     email: 'Alex@email.com',
//     password: '123123qwe231',
//   };

//   let defaultUser2 = {
//     id:'123',
//     name: 'User',
//     surname: 'User',
//     nickname: 'User-123',
//     email: 'user@email.com',
//     password: '123123eqw',
//   };



//   const initialState = [defaultUser, defaultUser2];

//   const deletedUser = expectSaga(deleteUser, userId)
//     .provide([call(deleteUser_request)])
//     .withReducer(allUserReducer, initialState)

//     const result = await deletedUser.run();
//     console.log(result.storeState);
// });


// delete user
// updateUser
// createUser mockData with new user must return message success and his data

// it('Should update user', async () => {
//   const userId = {
//     id: '5e0cfe1a115ff3494c51946f',
//   };

//   const body = {
//     name: 'User',
//     surname: 'User',
//     nickname: 'User-123',
//     email: 'user@email.com',
//     password: '123123eqw',
//   };

//   const initialState = {};

//   const updatedUser = expectSaga(updateUser, userId, body)
//     .provide([call(updateUser_request)])
//     .withReducer(userReducer, initialState)

//     const result = await updatedUser.run();
//     console.log(result.storeState);
//     // expect(result.storeState).toStrictEqual(userWithCurrentid);


// });


// delete update create ??? see test under