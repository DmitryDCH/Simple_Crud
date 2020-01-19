import allUserReducer from '../all-user-reducer';

import {
  putAllUsers,
  putInfoAboutDeleteUser,
  putCreatedUser,
  putUpdateUser,
} from '../../saga-effects/saga-actions';

it('New users should be added to list', () => {

  let firstUser = {
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
  };

  let secondUser = {
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
  };

  const users = [
    firstUser,
    secondUser,
  ];

  let action = putAllUsers(users);

  let newState = allUserReducer( [], action);

  expect(newState.length).toBe(2);
});

it('One of users shoud be delete from list', () => {

  let firstUser = {
    _id: '312',
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
  };

  let secondUser = {
    _id: '123',
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
  };

  const users = [
    firstUser,
    secondUser,
  ];

  const  deleteUser = {
    deletedUser: {
      _id: '123',
      name: 'Alex',
      surname: 'Smith',
      nickname: 'Gross',
      email: 'Alex@email.com',
      password: '123123qwe231',
    }
  }

  const action = putInfoAboutDeleteUser(deleteUser);
  const state = allUserReducer(users, action);

  expect(state.length).toBe(1);

});

it('Should put one user to state', () => {

  let firstUser = {
    _id: '312',
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
  };

  const initialState = [
    {
    _id: '3e2',
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex@email.com',
    password: '123123qwe231',
    }
  ];

  const action = putCreatedUser(firstUser);
  const state = allUserReducer(initialState, action);

  expect(state.length).toBe(2);

});

it('Should update one user in state', () => {

  let toUpdate = {
    _id: '1',
    name: 'Alex',
    surname: 'Smith',
    nickname: 'Gross',
    email: 'Alex123@email.com',
    password: '123123qwe231',
  };

  const initialState = [
    {
    _id: '1',
    name: 'testUser1',
    surname: 'TestUser1',
    nickname: 'TestUser1',
    email: 'TestUser1@email.com',
    password: 'TestUser1',
    },
    {
      _id: '2',
      name: 'TestUser2',
      surname: 'TestUser2',
      nickname: 'TestUser2',
      email: 'TestUser2@email.com',
      password: 'TestUser2',
    },
  ];
  
  const action = putUpdateUser(toUpdate, '1');
  const state = allUserReducer(initialState, action);

  expect(state[0]).toStrictEqual(toUpdate);

});




