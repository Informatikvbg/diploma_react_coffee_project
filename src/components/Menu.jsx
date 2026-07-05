import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo/Logo.svg';

const Menu = () => {
  return (
    <ul className="header">
      <li className="header__item">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </li>
      <li className="header__item">
        <NavLink to="/our-coffee">Our coffee</NavLink>
      </li>
      <li className="header__item">
        <NavLink to="/for-your-pleasure">For your pleasure</NavLink>
      </li>
    </ul>
  );
};

export default Menu;