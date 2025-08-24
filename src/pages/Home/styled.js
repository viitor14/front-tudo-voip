import styled from 'styled-components';
import { borderColor, primaryColor, primaryDarkColor } from '../../config/colors';
import { VscEllipsis } from 'react-icons/vsc';

import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';

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
    status === 'CONCLUÍDO'
      ? 'rgba(209, 244, 228, 1)'
      : status === 'EM ANDAMENTO'
        ? 'rgba(255, 244, 184, 1)'
        : status === 'RECUSADO'
          ? 'rgba(250, 219, 216, 1)'
          : '#fff'};
  color: ${({ status }) =>
    status === 'CONCLUÍDO'
      ? 'rgba(0, 77, 43, 1)'
      : status === 'EM ANDAMENTO'
        ? 'rgba(140, 109, 0, 1)'
        : status === 'RECUSADO'
          ? 'rgba(139, 0, 0, 1)'
          : '#fff'};
`;

export const EllipsisIcon = styled(VscEllipsis)`
  font-size: 20px;
  color: #000;
  cursor: pointer;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
  padding-right: 20px;

  span {
    color: rgba(100, 116, 139, 1);
    font-size: 14px;
  }

  .pagination-buttons {
    display: flex;
    gap: 8px;
  }
`;

export const PaginationButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  transition: all 0.2s ease-in-out;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  transition: all 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    border: none;
    transition: all 0.2s ease-in-out;
  }

  &:hover:not(:disabled) {
    transition: all 0.2s ease-in-out;
    background-color: #f0f0f0;
  }
`;

export const ChevronRightIcon = styled(VscChevronRight)`
  font-size: 20px;
  color: #000;
`;

export const ChevronLeftIcon = styled(VscChevronLeft)`
  font-size: 20px;
  color: #000;
`;

export const ActionsCell = styled.td`
  position: relative; // Essencial para o posicionamento do menu
  text-align: center;
`;

export const ActionsMenu = styled.div`
  position: absolute;
  top: 30px; // Ajuste conforme necessário
  right: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 150px;
  padding: 8px 8px;
`;

export const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background: none;
  color: #000;
  border: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &.delete {
    color: red;
  }
`;
