import React from 'react';
import './List-User.scss';

import ListUserItem from '../List-User-Item';

const ListUser = ({ allUsers }) =>  {

  if (allUsers.length === 0){
    // Spinner in future
    return <p>Loading ...</p>
  }

  const users = allUsers.map(({ _id, name, surname }) => {
    return <ListUserItem name={name} surname={surname} key={_id}  />
  });

  return(
    <ul className='user-list'>
      { users }
    </ul>
  );
}

export default ListUser;