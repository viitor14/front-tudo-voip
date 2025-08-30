import styled from 'styled-components';

import { borderColor, secondaryColor } from '../../config/colors';

export const DivGeral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivResumoPedido = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    font-weight: 600;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  border: 2px solid ${borderColor};
  border-radius: 5px;

  hr {
    border: 1px solid rgba(226, 232, 240, 1);
    margin: 16px 0px;
  }
`;

export const DivCliente = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 16px;
  }
`;

export const DivInfoCliente = styled.div`
  p {
    font-weight: lighter;
    color: rgba(109, 120, 142, 1);
    font-size: 14px;
  }
`;

export const DivOberservacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const TextArea = styled.textarea`
  min-width: 100%;
  height: 80px;
  border: 2px solid ${borderColor};
  border-radius: 5px;
  padding: 10px;
  font-family: 'Figtree', sans-serif;
  font-weight: 300;
`;

export const DivTermo = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  cursor: pointer; /* Para o usuário saber que a área é clicável */

  /* 1. Esconde o checkbox original, mas o mantém funcional */
  input[type='checkbox'] {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  /* 2. Cria a "caixa" do nosso checkbox customizado */
  label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid ${secondaryColor}; /* <-- SUA BORDA CUSTOMIZADA! */
    border-radius: 4px;
    margin-right: 10px;
    background-color: white;
    transition: all 0.2s ease;
  }

  /* 3. Estiliza a "caixa" quando o input original está MARCADO */
  input[type='checkbox']:checked + label::before {
    background-color: ${secondaryColor};
    border-color: ${secondaryColor};
  }

  /* 4. Cria o "check" (✓) usando bordas e o rotaciona. Ele só aparece quando o input está MARCADO
  input[type='checkbox']:checked + label::after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);

     Posiciona o "check" dentro da caixa
    position: absolute;
    left: 8px;  Ajuste fino da posição horizontal
    top: 5px;  Ajuste fino da posição vertical
  }
  */

  label {
    position: relative; /* Essencial para posicionar o "check" (::after) */
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: -5px;
`;
