import styled from 'styled-components';
import { ImBin } from 'react-icons/im';
import { borderColor, secondaryColor } from '../../config/colors';

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
    border: 2px solid ${secondaryColor};
    border-radius: 50%;
    margin-right: 10px;
    background-color: white;
    transition: all 0.2s ease-in-out;
  }

  /* Altera a borda quando o input está selecionado */
  input[type='radio']:checked + label::before {
    border-color: ${secondaryColor};
  }

  /* Cria o ponto interno laranja quando selecionado */
  input[type='radio']:checked + label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${secondaryColor};
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
export const InputsContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

// Wrapper para cada conjunto de label + input
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

// Label de texto acima dos inputs
export const LabelInput = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

// O input de texto estilizado
export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${borderColor};
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: ${secondaryColor};
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: -5px;
`;
