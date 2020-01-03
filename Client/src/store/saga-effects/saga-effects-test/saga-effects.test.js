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
} from '../saga-effects';

// Api
import {
  getAllUsers_request,
  getUserById_request
} from '../../../services/user-service';


it('Should get users from server', async () => {
  const initialState = [];

  const users =  expectSaga(getAllUsers)
    .provide([call(getAllUsers_request)])
    .withReducer(allUserReducer, initialState)

    const result = await users.run();

    expect(result.storeState.length > 0).toBe(true);
});

it('Shoul get user by id', async () => {
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

// delete user
// updateUser
// createUser