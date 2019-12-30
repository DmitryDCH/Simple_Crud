import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { singleUser, allUsers } = this.props;
    console.log(singleUser, allUsers);
    return(
      <p>Hello from App</p>
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

  }
};

export default connect(
  putStateToProps,
  putDispatchToProps,
)(App);