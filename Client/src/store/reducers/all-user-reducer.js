import { PUT_USERS, PUT_DELETE_USER, CREATE_USER } from '../saga-effects/saga-actions';

const initialState = [];

const allUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_USERS:
      return action.users;
    case PUT_DELETE_USER:
        const id = action.deleteUser.deletedUser._id;
        const newState = state.filter(elem => elem._id !== id);
      return newState;
    case CREATE_USER:
      const { addUser } = action;
      const newUserState = [
        ...state,
        addUser
      ];
      return newUserState;
    default:
      return state;
  }
};

export default allUserReducer;