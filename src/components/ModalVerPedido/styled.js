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
