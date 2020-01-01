import { PUT_USER, PUT_DELETE_USER, PUT_UPDATE_USER } from '../saga-effects/saga-actions';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_USER:
      return action.user;
    case PUT_DELETE_USER:
      return null;
    case PUT_UPDATE_USER:
      const newState = {
        ...state,
        name: action.updatedUser.name,
        surname: action.updatedUser.surname,
        nickname: action.updatedUser.nickname,
        email: action.updatedUser.email,
        password: action.updatedUser.password,
      }
      return newState;
    default:
      return state;
  }
};

export default userReducer;