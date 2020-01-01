import { 
  PUT_USERS,
  PUT_DELETE_USER,
  PUT_CREATE_USER,
  PUT_UPDATE_USER,
} from '../saga-effects/saga-actions-type';

const initialState = [];

const allUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_USERS:
      return action.users;
    case PUT_DELETE_USER:
        const id = action.deleteUser.deletedUser._id;
        const newState = state.filter(elem => elem._id !== id);
      return newState;
    case PUT_CREATE_USER:
      const newUserState = [
        ...state,
        {
          ...action.createdUser.createdUser
        },
      ];
      return newUserState;
    case PUT_UPDATE_USER: 
      const { name, surname, nickname, email, password } = action.updatedUser;
      const idOfElem = action.id;
      const itemIndex = state.findIndex((elem) => elem._id === idOfElem);
      const oldItem = state[itemIndex];
      
      const newItem = {
        ...oldItem,
        name,
        surname,
        nickname,
        email,
        password,
      };

      const before = state.slice(0, itemIndex);
      const after = state.slice(itemIndex + 1);

      const updatedState = [
        ...before,
        newItem,
        ...after,
      ];

      return updatedState;
    default:
      return state;
  }
};

export default allUserReducer;