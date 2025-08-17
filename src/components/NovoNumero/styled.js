import styled from 'styled-components';
import { borderColor } from '../../config/colors';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  p {
    font-weight: 600;
  }
`;

export const DivInput = styled.div`
  display: flex;
  gap: 6px;

  button {
    padding: 8px 8px;
    text-align: center;
    border: 2px solid ${borderColor};
    border-radius: 5px;
    font-weight: 400;
    font-size: 18px;
    background: transparent;
    color: #000;
  }

  input {
    max-width: 80px;
    border: 2px solid ${borderColor};
    border-radius: 5px;
    text-align: center;
    font-weight: 300;
    font-size: 18px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
