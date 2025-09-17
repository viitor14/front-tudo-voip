import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

import {
  Nav,
  Div,
  UserIcon,
  DivIcon,
  DivInfoUser,
  NameEmail,
  LogoutIcon,
  DocumentIcon,
  IconUserAdd,
  DivIconUser,
  DownloadButton,
  AdminButton
} from './styled';
import logo from './img/logo2.png';

export default function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const { user, isLoggedIn, isAdmin } = useSelector((state) => ({
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    isAdmin: state.auth.user?.admin
  }));

  const logout = () => {
    dispatch(actions.loginFailure());
    history.push('/login');
    toast.error('Você foi desconectado');
  };

  return (
    <Nav>
      <Div>
        <img src={logo} alt="" />
        {isLoggedIn && (
          <DivIconUser>
            <DownloadButton
              // O caminho começa com '/' porque a pasta 'public' é a raiz do servidor
              href="/documentos/termo-de-portabilidade.docx"
              // Opcional: define o nome que o ficheiro terá ao ser baixado
              download="Termo_de_Portabilidade.docx">
              <DocumentIcon />
              Termo de portabilidade
            </DownloadButton>

            <hr />

            <DivIcon>
              <UserIcon onClick={() => setOpen(!open)} />
              {open && (
                <DivInfoUser>
                  {user && (
                    <NameEmail>
                      <p>{user.nome}</p>
                      <p>{user.email}</p>
                    </NameEmail>
                  )}

                  {isAdmin && (
                    <AdminButton to="/cadastro">
                      <IconUserAdd />
                      Criar Usuario
                    </AdminButton>
                  )}

                  <button type="button" onClick={logout}>
                    <LogoutIcon />
                    Sair
                  </button>
                </DivInfoUser>
              )}
            </DivIcon>
          </DivIconUser>
        )}
      </Div>
    </Nav>
  );
}
