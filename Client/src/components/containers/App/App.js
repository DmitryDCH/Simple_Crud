import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

// Action creators
import { getAllUsers, getUserById, deleteUserById, updateUser, addUser } from '../../../store/saga-effects/saga-actions';

// import components
import Header from '../../Header';
import ListUser from '../../List-User';
import UserInfoList from '../../User-Info-list';
import ModalForm from '../../Modal-form';
import AddUser from '../../Add-user';

class App extends Component {
  render() {
    const { singleUser, allUsers } = this.props; // state data
    const { getUserById, deleteUserById, updateUser, addUser } = this.props; // functions
    return(
      <div className='wrapper'>
        <Header usersCount={allUsers.length} />
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
    addUser: (body) => dispatch(addUser(body)),
  }
};

export default connect(
  putStateToProps,
  putDispatchToProps,
)(App);