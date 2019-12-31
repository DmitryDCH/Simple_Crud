import { PUT_USERS } from '../saga-effects/saga-actions';

const initialState = [];

const allUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_USERS:
      return action.users;
    default:
      return state;
  }
};

export default allUserReducer;