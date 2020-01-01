import React from 'react';
import './UserInfoList.scss';

const UserInfoList = ({ userInfo, deleteUserById }) => {
  if(!userInfo) {
    return(
      <article className='user-info'>
        <p className='advice'>Select someone from list</p>
      </article>
    );
  }
  const { name, surname, nickname, email, password, _id } = userInfo;
  return(
    <section className='user-info'>
      <ul className='user-info_list'>
        <li className='user-info_list_item'>
          Name:
          <span className='info'>
            {name}
          </span>
        </li>
        <li className='user-info_list_item'>
          Surname:
          <span className='info'>
            {surname}
          </span>
        </li>
        <li className='user-info_list_item'>
          Nickname:
          <span className='info'>
            {nickname}
          </span>
        </li>
        <li className='user-info_list_item'>
          Email:
          <span className='info'>
            {email}
          </span>
        </li>
        <li className='user-info_list_item'>
          Password:
          <span className='info'>
            {password}
          </span>
        </li>
        <li className='user-info_list_item'>
          ID:
          <span className='info'>
            {_id}
          </span>
        </li>
        <li className='user-info_list_item'>
          <button className='btn-action_delete' onClick={() => deleteUserById(_id)}>Delete user</button>
        </li>
      </ul>
    </section>
  );
}

export default UserInfoList;