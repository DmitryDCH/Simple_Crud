import React, { Component } from 'react';
import './List-User-Item.scss';

export default class ListUserItem extends Component {
  render() {
    const { name, surname, getUserById } = this.props;
    return(
      <li className='user-list_item'>
        <p className='text'>Name: <span className='name'>{name}</span></p>
        <p className='text'>Surname: <span className='surname'>{surname}</span></p>
        <button className='all_info' onClick={getUserById}>Show all info</button>
      </li>
    );
  }
};