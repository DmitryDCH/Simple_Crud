import React, { Component } from 'react';
import './Modal-form.scss';

export default class ModalForm extends Component {

  // state for get form data ? mb ref ?

  state={
    name: null,
    surname: null,
    nickname: null,
    email: null,
    password: null, 
  }

  onSubmith = (e) => {
    e.preventDefault();
    const { updateUser, userInfo } = this.props;
    updateUser(userInfo._id, this.state);
  };

  nameHandler = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  }
  surnameHandler = (e) => {
    const { value } = e.target;
    this.setState({
      surname: value,
    });
  }
  nicknameHandler = (e) => {
    const { value } = e.target;
    this.setState({
      nickname: value,
    });
  }
  emailHandler = (e) => {
    const { value } = e.target;
    this.setState({
      email: value,
    })
  }
  passwordHandler = (e) => {
    const { value } = e.target;
    this.setState({
      password: value,
    });
  }

  render() {

    const { userInfo } = this.props;
    
    if( userInfo === null ) {
      return null;
    }


  
    return(
      <div className='form-wrapper'>
        <form onSubmit={this.onSubmith}>
          <div className='input-group'>
            <label htmlFor='name'>Enter name</label>
            <input type='text' name='name' required placeholder='Enter name' onChange={this.nameHandler} />
          </div>
          <div className='input-group'>
            <label htmlFor='surname'>Enter surname</label>
            <input type='text' name='surname' required placeholder='Enter surname' onChange={this.surnameHandler} />
          </div>
          <div className='input-group'>
            <label htmlFor='nickname'>Enter nickname</label>
            <input type='text' name='nickname' required placeholder='Enter nickname' onChange={this.nicknameHandler} />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Enter email</label>
            <input type='email' name='email' required placeholder='Enter email' onChange={this.emailHandler} />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Enter password</label>
            <input type='text' minLength='6' name='password' required placeholder='Enter password' onChange={this.passwordHandler} />
          </div>
          <button type='submit'>Update</button>
        </form>
      </div>
    );
  }
}