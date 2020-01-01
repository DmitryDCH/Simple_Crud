import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

// Action creators
import { getAllUsers, getUserById, deleteUserById, updateUser } from '../../../store/saga-effects/saga-actions';

// import components
import Header from '../../Header';
import ListUser from '../../List-User';
import UserInfoList from '../../User-Info-list';
import ModalForm from '../../Modal-form';

class App extends Component {
  render() {
    const { singleUser, allUsers } = this.props; // state data
    const { getUserById, deleteUserById, updateUser } = this.props; // functions
    return(
      <div className='wrapper'>
        <Header usersCount={allUsers.length} />
        <div className='content'>
          <ListUser allUsers={allUsers} getUserById={getUserById} />
          <UserInfoList userInfo={singleUser} deleteUserById={deleteUserById} />
          <ModalForm userInfo={singleUser} updateUser={updateUser} />
        </div>
      </div>
    );
  }
};

const putStateToProps = ({ userReducer, allUsersReducer }) => {
  return{
    singleUser: userReducer,
    allUsers: allUsersReducer,
  }
};

const putDispatchToProps = (dispatch) => {
  return {
    getAllUsers: dispatch(getAllUsers()),
    getUserById: (id) => dispatch(getUserById(id)),
    deleteUserById: (id) => dispatch(deleteUserById(id)),
    updateUser: (id, body) => dispatch(updateUser(id, body)),
  }
};

export default connect(
  putStateToProps,
  putDispatchToProps,
)(App);