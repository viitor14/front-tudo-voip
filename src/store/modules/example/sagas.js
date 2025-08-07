import { call, put, all, takeLatest } from 'redux-saga/effects';
//call - chama função assicrona
//put - disparar uma action
//all - Permite colocar mais de uma action
//takeLatest - Caso o usúario clique varias vezes no botão, só vai pegar o ultimo click
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    //Faz com que o SAGA ouça a requisção que foi chamada no Login
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error('Deu erro');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
