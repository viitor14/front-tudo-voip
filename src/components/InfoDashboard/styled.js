import styled from 'styled-components';
import { borderColor } from '../../config/colors';

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 15px;
  border-radius: 5px;
  border: 2px solid ${borderColor};
  width: 100%;
  background: ${(props) => props.backgroundColor};

  .infoNumber {
    font-size: 28px;
    font-weight: 800;
  }
`;

export const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(100, 116, 139, 1);
  }
`;
