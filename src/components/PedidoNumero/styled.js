import styled from 'styled-components';
import { ImBin } from 'react-icons/im';
import { borderColor } from '../../config/colors';

export const DivPedidoNumero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivInputRadio = styled.div`
  display: flex;
  gap: 60px;
`;

export const InputRadio = styled.div`
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
    cursor: pointer;
  }
`;

export const LabelNumber = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  p {
    font-weight: 600;
  }
`;

export const Labell = styled.div`
  width: 100%;
`;

export const DivInputsNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: fit-content;
    background: white;
    color: #000;
    font-weight: 600;
    border: ${borderColor} 2px solid;
    border-radius: 5px;
    padding: 13px;
  }
`;

export const DivLixeira = styled.div`
  display: flex;
  gap: 10px;
  border: ${borderColor} 2px solid;
  border-radius: 5px;
  padding: 8px 8px;
  align-items: center;
`;

export const StyledTrashIcon = styled(ImBin)`
  font-size: 24px;
  color: red; // Mudei a cor para branco para contrastar com o fundo vermelho
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Efeitos de hover, focus, etc. */
  &:hover {
    color: #e74c3c;
    transform: scale(1.1);
  }
`;
