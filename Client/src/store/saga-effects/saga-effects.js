import { call, put, takeEvery } from 'redux-saga/effects';

import { GET_ALL_USERS, putAllUsers } from './saga-actions';
import { getAllUsers_request } from '../../services/user-service';

function* getAllUsers() {
  try {
    const users = yield call(getAllUsers_request);
    yield put(putAllUsers(users));
  } catch (error) {
    console.error('Problem with saga-getAllUsers', error);
  }
}


function* rootSaga() {
  yield takeEvery(GET_ALL_USERS, getAllUsers);
}

export default rootSaga;