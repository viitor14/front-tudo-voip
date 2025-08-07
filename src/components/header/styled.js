import styled from 'styled-components';
import { primaryColor, borderColor } from '../../config/colors';
import { LiaUserCircleSolid } from 'react-icons/lia';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${borderColor};
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const UserIcon = styled(LiaUserCircleSolid)`
  color: #007bff;
  font-size: 100px;
`;
