import styled from 'styled-components';
import { borderColor } from '../../config/colors';

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 15px;
  border-radius: 5px;
  border: 2px solid ${borderColor};
  width: 280px;

  .infoNumber {
    font-size: 24px;
    font-weight: 800;
  }
`;

export const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  p {
    font-size: 12px;
    font-weight: 300;
    color: rgba(100, 116, 139, 1);
  }
`;
