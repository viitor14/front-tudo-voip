import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { borderColor } from '../../config/colors';

export const InputWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width || '100%'};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${(props) => props.padding || '10px'}; // espaço para o ícone
  border: 2px solid ${borderColor};
  border-radius: ${(props) => props.borderRadius || '5px'};
  font-family: 'Figtree', sans-serif;
  font-weight: 300;
  font-size: 14px;

  border: 1px solid ${(props) => (props.hasError ? '#e74c3c' : '#ccc')};

  &:focus {
    border-color: ${(props) => (props.hasError ? '#e74c3c' : '#3400a3ff')};
  }
`;

export const Icon = styled(FiSearch)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
`;
