import styled from 'styled-components';
import { borderColor, secondaryColor } from '../../config/colors';

export const SelectWrapper = styled.div`
  position: relative;
  width: 10%;
  height: 100%;
`;

export const Selected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${borderColor};
  border-radius: 5px;
  height: 100%;
  background: #fff;
  cursor: pointer;
  padding: 0 15px;
  font-family: 'Figtree', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const OptionsList = styled.ul`
  background-color: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 2px solid ${borderColor};
  border-radius: 5px;
  height: auto;
  overflow-y: auto;
  z-index: 10;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  list-style: none;
  font-family: 'Figtree', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const OptionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: ${secondaryColor};
  }
  border-radius: 5px;
`;
