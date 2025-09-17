import styled from 'styled-components';

export const DivMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 47, 109, 1);
  width: 40%;
  height: 100%;

  img {
    max-width: 400px;
    max-height: 380px;
  }
`;

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  gap: 40px;
  padding: 0 70px;

  label {
    > p {
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
`;

export const TitleLogin = styled.div`
  text-align: center;

  p:first-child {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 10px;
  }

  p:last-child {
    color: rgba(100, 116, 139, 0.9);
    font-size: 20px;
    font-weight: 300;
  }
`;

export const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const ButtonLogin = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 50%;
    background: rgba(0, 47, 109, 1);
    font-weight: 600;
  }

  button:last-child {
    width: fit-content;
    height: fit-content;
    background: red !important;
    font-weight: 400;
    color: #747474ff;
  }
`;
