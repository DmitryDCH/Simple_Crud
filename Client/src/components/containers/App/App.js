import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

// Action creators
import { getAllUsers, getUserById, deleteUserById } from '../../../store/saga-effects/saga-actions';

// import components
import Header from '../../Header';
import ListUser from '../../List-User';
import UserInfoList from '../../User-Info-list';

class App extends Component {
  render() {
    const { singleUser, allUsers } = this.props; // state data
    const { getUserById, deleteUserById } = this.props; // functions
    return(
      <div className='wrapper'>
        <Header usersCount={allUsers.length} />
        <div className='content'>
          <ListUser allUsers={allUsers} getUserById={getUserById} />
          <UserInfoList userInfo={singleUser} deleteUserById={deleteUserById} />
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
  }
};

export default connect(
  putStateToProps,
  putDispatchToProps,
)(App);