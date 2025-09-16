import styled from 'styled-components';

import { BsHeadset } from 'react-icons/bs';
import { AiOutlineTrademark } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgba(26, 57, 107, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 30px 100px;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 10px;
`;

export const IconHeadset = styled(BsHeadset)`
  color: white;
`;

export const IconTrademark = styled(AiOutlineTrademark)`
  color: white;
`;

export const IconWhatsapp = styled(FaWhatsapp)`
  color: white;
`;
