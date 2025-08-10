import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { LiaUserCircleSolid } from 'react-icons/lia';
import { Nav, Div, UserIcon } from './styled';
import logo from './img/logo.png';

export default function Header() {
  return (
    <Nav>
      <Div>
        <img src={logo} alt="" />
        <UserIcon />
      </Div>
    </Nav>
  );
}
