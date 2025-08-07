import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LiaUserCircleSolid } from 'react-icons/lia';
import { Nav, Div } from './styled';
import logo from './img/logo.png';

export default function Header() {
  return (
    <Nav>
      <Div>
        <img src={logo} alt="" />
        <LiaUserCircleSolid />
      </Div>
    </Nav>
  );
}
