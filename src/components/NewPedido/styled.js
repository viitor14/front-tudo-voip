import styled from 'styled-components';

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
  gap: 20px;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 80%;
  max-width: 60vw;
  height: 90vh;
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

  > div {
    flex: 1;
    width: calc(33.33% - 11px);
  }

  p {
    font-weight: 600;
    margin-bottom: 8px;
  }
`;
