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

  thead {
    color: rgba(100, 116, 139, 1);
  }

  thead th {
    font-weight: 300;
  }

  tbody .textStatus {
  }

  .textStatus > span {
    font-weight: bold;
    background: rgba(209, 244, 228, 1);
    border-radius: 5px;
    color: rgba(0, 77, 43, 1);
    padding: 4px 27px;
    font-size: 14px;
  }

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
