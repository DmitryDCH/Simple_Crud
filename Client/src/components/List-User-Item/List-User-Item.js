import React from 'react';
import './List-User-Item.scss';


const ListUserItem = ({ name, surname }) => {
  return(
    <li className='user-list_item'>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
    </li>
  );
};

export default ListUserItem;