import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { borderColor } from '../../config/colors';
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 80%;
  max-width: 60vw;
  height: 90vh;
  overflow-y: auto;
`;

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivContentSon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; /* <-- ESSA É A MUDANÇA MAIS IMPORTANTE */
  gap: 20px; /* Adiciona um bom espaçamento vertical entre as seções */
`;

export const DivIcon = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const CloseButton = styled.button`
  float: right;
`;

export const Label = styled.label`
  p {
    font-weight: 600;
  }
`;

export const DivInputRegion = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-bottom: 20px;

  > div {
    flex: 1;
    width: calc(33.33% - 11px);
  }

  p {
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

export const DivButtonNext = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivTypeCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-weight: 600;
  }
`;

export const DivInputRadio = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  font-weight: 500;

  /* Esconde o input de rádio original */
  input[type='radio'] {
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
  }

  /* Cria o círculo externo do rádio button */
  label::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(249, 104, 36, 1);
    border-radius: 50%;
    margin-right: 10px;
    background-color: white;
    transition: all 0.2s ease-in-out;
  }

  /* Altera a borda quando o input está selecionado */
  input[type='radio']:checked + label::before {
    border-color: rgba(249, 104, 36, 1);
  }

  /* Cria o ponto interno laranja quando selecionado */
  input[type='radio']:checked + label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(249, 104, 36, 1);
    position: absolute;
    top: 50%;
    left: 6px; /* Ajuste conforme necessário */
    transform: translateY(-50%);
  }

  /* Adiciona um container para o label para posicionamento do ponto */
  label {
    position: relative;
    display: flex;
    align-items: center;
  }
`;

export const ButtonNext = styled.button`
  align-self: flex-end;
  background-color: rgba(249, 104, 36, 1);
  color: white;
  border: none;
  padding: 12px 10px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  font-weight: 600;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

export const BotaoVoltar = styled.button`
  background: #fff;
  color: #000;
  border: 2px solid ${borderColor};
  padding: 12px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    line-height: 1;
  }
`;

export const StyledIconBack = styled(IoIosArrowBack)`
  color: #000;
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
`;
