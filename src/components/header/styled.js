import styled from 'styled-components';
import { primaryColor, borderColor, secondaryColor } from '../../config/colors';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { SlLogout } from 'react-icons/sl';
import { GrDocumentText } from 'react-icons/gr';

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

  img {
    width: 234px;
    height: 58px;
  }
`;

export const DivIcon = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  justify-content: end;
`;

export const DivInfoUser = styled.div`
  background-color: #fff; // cor de fundo mais neutra
  position: absolute;
  top: 100%;
  min-width: 230px;
  border: 2px solid ${borderColor};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin-top: 8px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 10px 0;
    color: #000;
    background: #fff;
    text-align: start;
    font-size: 16px;
    gap: 4px;
  }
`;

export const NameEmail = styled.div`
  display: flex;
  flex-direction: column;

  p:first-child {
    font-weight: 700;
    font-size: 16px;
  }

  p:last-child {
    font-weight: 400;
    font-size: 14px;
    color: rgba(112, 127, 148, 1);
  }
`;
export const LogoutIcon = styled(SlLogout)`
  color: #000;
  font-size: 18px;
  rotate: 180deg;
`;
export const DocumentIcon = styled(GrDocumentText)`
  font-size: 18px;
  color: #000;
`;
export const UserIcon = styled(LiaUserCircleSolid)`
  color: rgba(100, 116, 139, 1);
  font-size: 48px;
  cursor: pointer;
`;
