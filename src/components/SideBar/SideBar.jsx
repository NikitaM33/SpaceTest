import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/icons/Logo.svg';
import acc from '../../assets/icons/Accaunt.svg';
import vps from '../../assets/icons/Vps.svg';
import domens from '../../assets/icons/domens.svg';
import jurnal from '../../assets/icons/jurnal.svg';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <img src={Logo} alt="Spaceweb" />
        </Link>
      </div>

      <div className="sidebar__menu">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link to="/">
              <img src={acc} alt="Accaunt" />
              Аккаунт
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/vps">
              <img src={vps} alt="vps" />
              VPS
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/domains">
              <img src={domens} alt="domains" />
              Домены
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/jurnal">
              <img src={jurnal} alt="jurnal" />
              Бортовой журнал
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
