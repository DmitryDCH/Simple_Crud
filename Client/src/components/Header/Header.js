import React from 'react';
import './Header.scss';

const Header = ({ usersCount }) => {

  const checkUsersCount = usersCount ? usersCount : '...';

  return(
    <header className='main-header'>
      <h1 className='main-header_title'>Simple User Editor</h1>
      <article className='main-header_counter'>
        <p className='main-header_counter-info'>We have { checkUsersCount } user(s)</p>
      </article>
    </header>
  )
};

export default Header;