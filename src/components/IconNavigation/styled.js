import styled, { css } from 'styled-components';

export const activeStyles = css`
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, rgba(249, 104, 36, 1), rgba(147, 61, 21, 1)) border-box;
  &::before {
    background: linear-gradient(to bottom, rgba(249, 104, 36, 1), rgba(147, 61, 21, 1));
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const inactiveStyles = css`
  border-color: #ccc;
  background: white;
  &::before {
    color: #ccc;
  }
`;

export const completedStyles = css`
  border-color: #2a2a2a;
  background: #2a2a2a;
  &::before {
    color: white;
  }
`;

// Componente do Círculo que aplica o estilo dinâmico
export const StepCircle = styled.span`
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 50%;
  width: 50px; /* Tamanho fixo para consistência */
  height: 50px;
  position: relative;
  color: transparent;
  box-sizing: border-box;

  &::before {
    content: attr(data-text);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 1.2em;
  }

  /* Aplica o bloco de CSS correto com base na prop 'status' */
  ${(props) => {
    switch (props.status) {
      case 'active':
        return activeStyles;
      case 'completed':
        return completedStyles;
      case 'inactive':
      default:
        return inactiveStyles;
    }
  }}
`;

// Containers do Layout
export const DivIconNavigation = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DivNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
  flex: 1; /* Faz com que cada etapa ocupe um espaço igual */
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Line = styled.hr`
  flex-grow: 1; /* Faz a linha ocupar todo o espaço disponível */
  border: none;
  border-top: 2px solid #ccc;
  margin: 0;
`;

export const StepTitle = styled.p`
  margin-top: 10px;
  font-weight: 500;
  color: #333;
`;
