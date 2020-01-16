import React, { PureComponent } from 'react';
import './List-User.scss';

// Spinner
import Spinner from '../utils/Spinner';

import ListUserItem from '../List-User-Item';

export default class ListUser extends PureComponent {
  render() {
    const { allUsers, getUserById } = this.props;

    if (allUsers.length === 0){
      return(
        <ul className='user-list'>
          <Spinner />
        </ul>
      );
    }
  

    const users = allUsers.map(({ _id, name, surname }) => {
      return <ListUserItem name={name} surname={surname} key={_id} getUserById={ () => getUserById(_id) }  />
    });

    return(
      <ul className='user-list'>
        { users }
      </ul>
    );
  }
}