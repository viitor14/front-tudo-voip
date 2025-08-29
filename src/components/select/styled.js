import styled from 'styled-components';
import { borderColor, secondaryColor } from '../../config/colors';
import { IoIosArrowDown } from 'react-icons/io';

export const SelectWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width || '10%'};
  //height: 100%;
`;

export const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${borderColor};
  border-radius: 5px;
  height: ${(props) => props.height || '100%'};
  background: #fff;
  cursor: pointer;
  padding: 10px 15px;
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
  margin-top: ${(props) => props.marginTop || '5px'};
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
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  border-radius: 5px;
`;

export const ArrowIcon = styled(IoIosArrowDown)`
  font-size: 16px;
  color: rgba(112, 127, 148, 1);
  rotate: ${(open) => (open.open ? '-180deg' : '0')};
  transition: all 0.3s ease-in-out;
`;
