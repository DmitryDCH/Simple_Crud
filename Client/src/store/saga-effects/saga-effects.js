import { call, put, takeEvery } from 'redux-saga/effects';

import { GET_ALL_USERS,  GET_USER_BY_ID, DELETE_USER, UPDATE_USER_BY_ID } from './saga-actions'
import { putAllUsers, putSignleUser, putInfoAboutDeleteUser, putUpdateUser } from './saga-actions';

import { getAllUsers_request, getUserById_request, deleteUser_request, updateUser_request } from '../../services/user-service';

function* getAllUsers() {
  try {
    const users = yield call(getAllUsers_request);
    yield put(putAllUsers(users));
  } catch (error) {
    console.error('Problem with saga-getAllUsers', error);
  }
}

function* getUserById({ id }) {
  try {
    const user = yield call(getUserById_request, id);
    yield put(putSignleUser(user));
  } catch (error) {
    console.error('Problem with saga-getUserById', error);
  }
}

function* deleteUser({ id }) {
  try {
    const deleteUser = yield call(deleteUser_request, id);
    yield put(putInfoAboutDeleteUser(deleteUser));
  } catch (error) {
    console.error('Problem with saga-deleteUser', error);
  }
}

function* updateUser({ id, body }) {
  try {
    yield call(updateUser_request, id, body);
    yield put(putUpdateUser(body));
  } catch (error) {
    console.error('Problem with saga-uodateUser', error);
  }
}


function* rootSaga() {
  yield takeEvery(GET_ALL_USERS, getAllUsers);
  yield takeEvery(GET_USER_BY_ID, getUserById);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(UPDATE_USER_BY_ID, updateUser);
}

export default rootSaga;