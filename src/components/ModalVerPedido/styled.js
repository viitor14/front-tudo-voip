import styled from 'styled-components';
import { orangeColor } from '../../config/colors'; // Supondo que tem um ficheiro de cores

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
  color: #007bff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &::before {
    content: '📥'; /* Você pode usar um emoji ou um caractere unicode. */
    margin-right: 8px; /* Espaçamento entre o ícone e o texto. */
    font-size: 1em; /* Tamanho do ícone. */
  }

  &:hover {
    color: ${orangeColor};
    transition: all 0.2s ease-out;
  }
`;

export const SaveChangesButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    transform 0.1s ease;
  margin-top: 20px;
  align-self: flex-end;
  &:hover {
    background-color: #218838;
  }
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    transform: scale(1);
  }
`;
