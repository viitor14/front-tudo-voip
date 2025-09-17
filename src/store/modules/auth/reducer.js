import { jwtDecode } from 'jwt-decode'; // 1. Importe a biblioteca
import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      const { token } = action.payload;
      let decodedUser = {};

      try {
        // 2. Descodifica o token para obter os dados seguros
        const decodedToken = jwtDecode(token);
        decodedUser = {
          cod_cliente: decodedToken.cod_cliente,
          email: decodedToken.email,
          admin: decodedToken.admin,
          nome: decodedToken.nome
        };
      } catch (e) {
        // Em caso de erro na descodificação, o utilizador fica vazio
        console.error('Erro ao descodificar o token:', e);
      }

      newState.isLoggedIn = true;
      newState.token = token;
      // 3. Guarda os dados do TOKEN, não da resposta da API
      newState.user = decodedUser;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    default:
      return state;
  }
}
