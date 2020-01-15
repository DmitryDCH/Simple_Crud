import { createSelector } from 'reselect'; // in state doesnt change - selectors save this state and did not re render page
// https://github.com/devSchacht/translations/blob/master/articles/reselect-selector-library-for-redux/readme.md

export const getUsers = (state) => {
    return state.allUsersReducer;
};

export const getSingleUser = (state) => {
    return state.userReducer;
};


export const getSuperUsers = createSelector(getUsers, (users) => {
    return users;
});

export const getSuperUser = createSelector(getSingleUser, (user) => {
    return user;
});