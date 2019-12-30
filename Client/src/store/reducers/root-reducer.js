import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import allUsersReducer from './all-user-reducer';

export default combineReducers({
  userReducer,
  allUsersReducer
});
