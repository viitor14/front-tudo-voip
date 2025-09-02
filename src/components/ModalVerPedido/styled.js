import styled from 'styled-components';
import { primaryColor } from '../../config/colors'; // Supondo que tem um ficheiro de cores

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #000;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #888;
  padding: 0;
  line-height: 1;

  &:hover {
    color: #333;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const DetailSection = styled.div`
  h3 {
    font-size: 1.1rem;
    color: #000;
    margin-top: 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 8px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  gap: 8px;
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;

  strong {
    color: #333;
    min-width: 150px; // Alinha os valores
  }
`;

export const DownloadLink = styled.a`
  /* Documentação dos Estilos */
  color: #007bff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  /* Usando um pseudo-elemento ::before para adicionar um ícone. */
  &::before {
    content: '📥'; /* Você pode usar um emoji ou um caractere unicode. */
    margin-right: 8px; /* Espaçamento entre o ícone e o texto. */
    font-size: 1em; /* Tamanho do ícone. */
  }

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

export const SaveChangesButton = styled.button`
  /* Documentação dos Estilos */

  /* ========= ESTILO BASE ========= */

  /* Espaçamento interno para que o texto não fique colado nas bordas. */
  padding: 10px 20px;

  /* Tamanho e peso da fonte para boa legibilidade. */
  font-size: 1rem; /* 16px */
  font-weight: bold;

  /* Cor do texto. Branco contrasta bem com fundos coloridos. */
  color: #ffffff;

  /* Cor de fundo. Verde é ótimo para ações de "salvar" ou "sucesso". */
  background-color: #28a745;

  /* Remove a borda padrão do navegador. */
  border: none;

  /* Cantos arredondados para um visual mais moderno. */
  border-radius: 5px;

  /* O cursor vira uma "mãozinha", indicando que é um elemento clicável. */
  cursor: pointer;

  /* Adiciona uma transição suave para as mudanças de cor e sombra. */
  transition:
    background-color 0.2s ease-in-out,
    transform 0.1s ease;

  /* Alinha o botão no final do contêiner do modal. */
  margin-top: 20px; /* Adiciona um espaço acima do botão */
  align-self: flex-end; /* Alinha à direita se o container for flex */

  /* ========= ESTADOS DE INTERAÇÃO ========= */

  /* Efeito ao passar o mouse por cima. */
  &:hover {
    /* Escurece um pouco a cor de fundo para dar feedback visual. */
    background-color: #218838;
  }

  /* Efeito ao clicar no botão. */
  &:active {
    /* Diminui levemente o tamanho do botão para simular um "pressionar". */
    transform: scale(0.98);
  }

  /* ========= ESTADO DESATIVADO (MUITO IMPORTANTE) ========= */

  /* Estilo aplicado quando o atributo 'disabled' é verdadeiro. */
  &:disabled {
    /* Cor de fundo acinzentada para indicar inatividade. */
    background-color: #cccccc;

    /* Cor do texto mais escura para contraste com o fundo cinza. */
    color: #666666;

    /* O cursor muda para 'not-allowed', informando que a ação não é permitida. */
    cursor: not-allowed;

    /* Remove qualquer efeito de transformação. */
    transform: scale(1);
  }
`;
