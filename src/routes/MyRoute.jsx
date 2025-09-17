import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({
  component: Component,
  isAdminOnly,
  isClosed,
  children,
  ...rest
}) {
  // CORREÇÃO 1: Pega o status de login do Redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.user?.admin);

  if (isAdminOnly && !isAdmin) {
    // Redireciona para a página inicial (ou uma página de 'acesso negado')
    // Isto impede que um utilizador normal aceda à página de admin
    return <Redirect to="/" />;
  }

  // Se a rota é fechada e o usuário não está logado...
  if (isClosed && !isLoggedIn) {
    // CORREÇÃO 2: ...redireciona para a página de LOGIN
    return <Redirect to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }} />;
  }

  // CORREÇÃO 3: Renderiza 'children' se existir, senão renderiza o 'component'
  return (
    <Route
      {...rest}
      render={(props) =>
        // Se um 'Component' foi passado, renderize-o
        Component ? (
          <Component {...props} />
        ) : (
          // Senão, renderize os 'children'
          children
        )
      }
    />
  );
}

// Boa prática: definir valores padrão para as props
MyRoute.defaultProps = {
  isClosed: false,
  component: null,
  children: null,
  isAdminOnly: false
};

// Ajuste para que 'component' não seja mais obrigatório, já que 'children' é uma alternativa
MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
  isClosed: PropTypes.bool,
  isAdminOnly: PropTypes.bool
};
