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

export const StatusSpan = styled.span`
  font-weight: bold;
  border-radius: 5px;
  padding: 4px 27px;
  font-size: 14px;
  background: ${({ status }) =>
    status === 'Ativo'
      ? 'rgba(209, 244, 228, 1)'
      : status === 'Em Andamento'
        ? 'rgba(255, 244, 184, 1)'
        : status === 'Recusado'
          ? 'rgba(250, 219, 216, 1)'
          : '#fff'};
  color: ${({ status }) =>
    status === 'Ativo'
      ? 'rgba(0, 77, 43, 1)'
      : status === 'Em Andamento'
        ? 'rgba(140, 109, 0, 1)'
        : status === 'Recusado'
          ? 'rgba(139, 0, 0, 1)'
          : '#fff'};
`;
