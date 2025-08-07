import { styled, createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');
  :root{
    --toastify-icon-color-success: white;
    --toastify-icon-color-error: white;
  }

  * {
    margin:0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: "Figtree", sans-serif;
    background-color: ${colors.primary};
    color: ${colors.primaryDarkColor};
  }

  html, body, #root{
    height: 100%;
  }

  button {
    cursor: pointer;
    font-family: "Figtree", sans-serif;
     background: linear-gradient(90deg, rgba(247, 101, 33, 1) 0%, rgba(231, 80, 9, 1) 100%);
    color: #fff;
    border: none;
    padding: 16px 19px;
    border-radius: 5px ;
    font-weight: 300;
    font-size: 14px;
  }

  a{
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  //Mudar css do Toastify
  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: ${colors.succesColor};
    color: #fff;
  }

  .Toastify__progress-bar--success {
  background: white;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: ${colors.errorColor};
  }

  .Toastify__progress-bar--error {
    background: white;
  }
`;

export const Container = styled.section`
  height: 100%;
  background-color: white;
  margin: 50px 100px;
`;
