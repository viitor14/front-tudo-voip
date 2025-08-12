import styled from 'styled-components';
import { secondaryColor } from '../../config/colors';

export const DivIconNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const DivNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  hr {
    align-self: center;
    width: 200px;
    margin: 0;
    border: none;
    background: rgba(226, 232, 240, 1);
    height: 1px;
    opacity: 1;
  }

  span {
    border: 2px solid transparent;
    border-radius: 50%;
    padding: 14px 20px;
    position: relative;
    color: transparent;

    /* Gradiente da borda */
    background:
      linear-gradient(white, white) padding-box,
      linear-gradient(to bottom, rgba(249, 104, 36, 1), rgba(147, 61, 21, 1)) border-box;

    /* Gradiente do texto */
    &::before {
      content: attr(data-text);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(to bottom, rgba(249, 104, 36, 1), rgba(147, 61, 21, 1));
      -webkit-background-clip: text;
      background-clip: text;
    }
  }

  p {
    font-weight: 500;
  }
`;
