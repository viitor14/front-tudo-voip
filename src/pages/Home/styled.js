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

export const Table = styled.table`
  border: 2px solid ${borderColor};
  border-radius: 5px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  th,
  td {
    padding: 16px 24px;
    text-align: left;
    vertical-align: middle;
  }

  th {
  }

  td {
    border-top: 2px solid ${borderColor};
    background: #fff;
  }
`;
