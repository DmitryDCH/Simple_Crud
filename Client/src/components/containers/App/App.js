import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.scss';

// Selectors
import {
  getSuperUser,
  getSuperUsers,
  getUserLength,
} from '../../../store/reducers/user-selector';

// Action creators
import { 
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  addUser, 
} from '../../../store/actions/actions';

// import components
import Header from '../../Header';
import ListUser from '../../List-User';
import UserInfoList from '../../User-Info-list';
import ModalForm from '../../Modal-form';
import AddUser from '../../Add-user';

class App extends PureComponent {
  render() {

    const { 
      singleUser,
      allUsers,
      usersLength
    } = this.props; // state data


    const { 
      getUserById,
      deleteUserById,
      updateUser,
      addUser 
    } = this.props; // functions

    return(
      <div className='wrapper'>
        <Header usersCount={usersLength} />
        <div className='content'>
          <ListUser allUsers={allUsers} getUserById={getUserById} />
          <UserInfoList userInfo={singleUser} deleteUserById={deleteUserById} />
          <ModalForm userInfo={singleUser} updateUser={updateUser} />
          <AddUser addUser={addUser} />
        </div>
      </div>
    );
  }
};

// redux-reselect in putStateToProps

const putStateToProps = (state) => {
  return{
    singleUser: getSuperUser(state),
    allUsers: getSuperUsers(state),
    usersLength: getUserLength(state),
  }
};

const putDispatchToProps = (dispatch) => {
  return {
    getAllUsers: dispatch(getAllUsers()),
    getUserById: (id) => dispatch(getUserById(id)),
    deleteUserById: (id) => dispatch(deleteUserById(id)),
    updateUser: (id, body) => dispatch(updateUser(id, body)),
    addUser: (body) => dispatch(addUser(body)),
  }
};

export default connect(
  putStateToProps,
  putDispatchToProps,
)(App);