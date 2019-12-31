import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

// Action creators
import { getAllUsers } from '../../../store/saga-effects/saga-actions';

// import components
import Header from '../../Header';
import ListUser from '../../List-User';
import UserInfoList from '../../User-Info-list';

class App extends Component {
  render() {
    const { singleUser, allUsers } = this.props; // we have data) its all okay)
    return(
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <ListUser allUsers={allUsers} />
          <UserInfoList />
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
  }
};

export default connect(
  putStateToProps,
  putDispatchToProps,
)(App);