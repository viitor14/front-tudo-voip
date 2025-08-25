import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({ component: Component, isClosed, children, ...rest }) {
  // CORREÇÃO 1: Pega o status de login do Redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Se a rota é fechada e o usuário não está logado...
  if (isClosed && !isLoggedIn) {
    // CORREÇÃO 2: ...redireciona para a página de LOGIN
    return <Redirect to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }} />;
  }

  // CORREÇÃO 3: Renderiza 'children' se existir, senão renderiza o 'component'
  return <Route {...rest}>{Component ? <Component /> : children}</Route>;
}

// Boa prática: definir valores padrão para as props
MyRoute.defaultProps = {
  isClosed: false,
  component: null,
  children: null
};

// Ajuste para que 'component' não seja mais obrigatório, já que 'children' é uma alternativa
MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
  isClosed: PropTypes.bool
};
