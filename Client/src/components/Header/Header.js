import React, { PureComponent } from 'react';
import './Header.scss';

import PropTypes from 'prop-types';

export default class Header extends PureComponent {
  render() {
    const { usersCount } = this.props;
    const checkUsersCount = usersCount ? usersCount : '...';
    return(
      <header className='main-header'>
        <h1 className='main-header_title'>Simple User Editor</h1>
        <article className='main-header_counter'>
          <p className='main-header_counter-info'>We have { checkUsersCount } user(s)</p>
        </article>
      </header>
    );
  }
};

Header.propTypes = {
  usersCount: PropTypes.number,
};