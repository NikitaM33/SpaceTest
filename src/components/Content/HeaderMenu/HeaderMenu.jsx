import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function HeaderMenu() {
  return (
    <div className="headerMenu">
      <span>
        <Link to="/wallet">
          100.00 P
        </Link>
      </span>
      <span className="headerMenu__bell">
        <Link to="/profile">
          <FontAwesomeIcon icon={faBell} />
          vikavishny
        </Link>
      </span>
      <span>
        <Link to="/logout">
          Выйти
        </Link>
      </span>
    </div>
  )
}

export default HeaderMenu;
