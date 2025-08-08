import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { borderColor } from '../../config/colors';

export const InputWrapper = styled.div`
  position: relative;
  width: 88%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 60px; // espaço para o ícone
  border: 2px solid ${borderColor};
  border-radius: 5px;
  font-family: 'Figtree', sans-serif;
  font-weight: 300;
  font-size: 14px;
`;

export const Icon = styled(FiSearch)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
`;
