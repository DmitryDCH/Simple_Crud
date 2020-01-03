import { call, put, takeEvery } from 'redux-saga/effects';

// types of listen actions
import { GET_ALL_USERS,  GET_USER_BY_ID, DELETE_USER, UPDATE_USER_BY_ID, CREATE_USER } from './saga-actions-type';

// Put-action-creators
import { putAllUsers, putSignleUser, putInfoAboutDeleteUser, putUpdateUser, putCreatedUser } from './saga-actions';

// Api-requests
import { getAllUsers_request, getUserById_request, deleteUser_request, updateUser_request, addUser_request } from '../../services/user-service';


export function* getAllUsers() {
  try {
    const users = yield call(getAllUsers_request);
    yield put(putAllUsers(users));
  } catch (error) {
    console.error('Problem with saga-getAllUsers', error);
  }
}

export function* getUserById({ id }) {
  try {
    const user = yield call(getUserById_request, id);
    yield put(putSignleUser(user));
  } catch (error) {
    console.error('Problem with saga-getUserById', error);
  }
}

export function* deleteUser({ id }) {
  try {
    const deleteUser = yield call(deleteUser_request, id);
    yield put(putInfoAboutDeleteUser(deleteUser));
  } catch (error) {
    console.error('Problem with saga-deleteUser', error);
  }
}

export function* updateUser({ id, body }) {
  try {
    yield call(updateUser_request, id, body);
    yield put(putUpdateUser(body, id));
  } catch (error) {
    console.error('Problem with saga-updateUser', error);
  }
}

export function* createUser({ addUser }) {
  try {
    const newUser = yield call(addUser_request, addUser);
    yield put(putCreatedUser(newUser));
  } catch (error) {
    console.error('Problem with saga-createUser', error);
  } 
}


function* rootSaga() {
  yield takeEvery(GET_ALL_USERS, getAllUsers);
  yield takeEvery(GET_USER_BY_ID, getUserById);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(UPDATE_USER_BY_ID, updateUser);
  yield takeEvery(CREATE_USER, createUser);
}

export default rootSaga;