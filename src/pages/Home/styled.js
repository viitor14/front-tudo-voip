import styled from 'styled-components';
import { borderColor, primaryColor, primaryDarkColor } from '../../config/colors';

export const DivTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${primaryDarkColor};
`;

export const BoxInfoDashboard = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`;

export const DivFilter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
