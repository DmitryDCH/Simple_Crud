import React, { Component } from 'react';
import './Add-user.scss';

export default class AddUser extends Component {

  state={
    name: '',
    surname: '',
    nickname: '',
    email: '',
    password: '', 
  }

  onSubmith = (e) => {
    e.preventDefault();
    const { addUser } = this.props;
    const state = this.state;
    addUser(state);
    this.setState({
      name: '',
      surname: '',
      nickname: '',
      email: '',
      password: '',
    })
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
    const { name, surname, nickname, email, password } = this.state;
    
    return(
      <div className='form-wrapper'>
        <form onSubmit={this.onSubmith}>
          <div className='input-group'>
            <label htmlFor='name'>Enter name</label>
            <input type='text' name='name' required placeholder='Enter name' onChange={this.nameHandler} value={name} />
          </div>
          <div className='input-group'>
            <label htmlFor='surname'>Enter surname</label>
            <input type='text' name='surname' required placeholder='Enter surname' onChange={this.surnameHandler} value={surname} />
          </div>
          <div className='input-group'>
            <label htmlFor='nickname'>Enter nickname</label>
            <input type='text' name='nickname' required placeholder='Enter nickname' onChange={this.nicknameHandler} value={nickname} />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Enter email</label>
            <input type='email' name='email' required placeholder='Enter email' onChange={this.emailHandler} value={email} />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Enter password</label>
            <input type='text' minLength='6' name='password' required placeholder='Enter password' onChange={this.passwordHandler} value={password} />
          </div>
          <button type='submit'>Add new USER</button>
        </form>
      </div>
    );
  }
}