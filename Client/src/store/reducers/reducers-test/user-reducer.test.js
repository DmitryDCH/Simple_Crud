// Reducer
import UserReducer from '../user-reducer';

// Action creators
import {
  putSignleUser,
  putInfoAboutDeleteUser,
  putUpdateUser,
} from '../../saga-effects/saga-actions';

it('New user should be added', () => {

  let userToAdd = {
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
  };

  let action = putSignleUser(userToAdd);

  let newState = UserReducer( {}, action);

  expect(newState).toBe(userToAdd);
});

it('User should be deleted', () => {

  let userToDelete = {
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
  };

  let action = putInfoAboutDeleteUser(userToDelete);

  let newState = UserReducer(userToDelete, action);

  expect(newState).toBe(null);
});

it('User should be updated', () => {

  let defaultUser = {
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
  };

  let toUpdate = {
    name: 'User',
    surname: 'User',
    nickname: 'User-123',
    email: 'user@email.com',
    password: '123123eqw',
  };

  let action = putUpdateUser(toUpdate);

  let newState = UserReducer(defaultUser, action);

  expect(newState).toStrictEqual(toUpdate);
});



