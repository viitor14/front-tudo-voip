import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import DefaultLayout from '../components/DefaultLayout/Index'; // 1. Importe o layout
import Login from '../pages/Login/Index';
import Cadastro from '../pages/Cadastro/Index';
import Home from '../pages/Home/Home'; // 2. Importe a página Home
import Page404 from '../pages/Page404/Index';

export default function Routes() {
  return (
    <Switch>
      {/* ROTA PÚBLICA: Não usa o DefaultLayout */}
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/cadastro" component={Cadastro} />

      {/* ROTA PRIVADA: Usa o DefaultLayout para ter o Header ----- TRAVAR ROTA PARA APENAS USUARIOS LOGADOS */}
      <MyRoute exact path="/" isClosed={true}>
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </MyRoute>

      {/* ROTA DE FALLBACK: Não usa o DefaultLayout */}
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
