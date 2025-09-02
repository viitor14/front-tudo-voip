import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

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
  IconUserAdd
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

                <button type="button">
                  <DocumentIcon />
                  Termo de portabilidade
                </button>

                {isAdmin && (
                  <button type="button">
                    <IconUserAdd />
                    Criar Usuario
                  </button>
                )}

                <button type="button" onClick={logout}>
                  <LogoutIcon />
                  Sair
                </button>
              </DivInfoUser>
            )}
          </DivIcon>
        )}
      </Div>
    </Nav>
  );
}
