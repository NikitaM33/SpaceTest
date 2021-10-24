import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <p>&copy; 2001 - 2018 ООО <Link to="/info">&laquo;СпейсВэб&raquo;</Link></p>
        <p>Все права защищены.</p>
        <p>Лицензия <Link to="/info">№163230</Link></p>
      </div>
      <div className="footer__contacts">
        <p>
          <Link to="/contacts">
            +7 (812) 334-12-22
          </Link> (в Санкт-Петербурге)
        </p>
        <p>
          <Link to="/contacts">
            +7 (495) 663-16-12
          </Link> (в Москве)
        </p>
        <p>
          <Link to="/contacts">
            (800) 100-16-15
          </Link> (бесплатно по России)
        </p>
      </div>
    </div>
  )
}

export default Footer;
