import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Nav,
  Div,
  UserIcon,
  DivIcon,
  DivInfoUser,
  NameEmail,
  LogoutIcon,
  DocumentIcon
} from './styled';
import logo from './img/logo.png';

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Div>
        <img src={logo} alt="" />
        <DivIcon>
          <UserIcon onClick={() => setOpen(!open)} />
          {open && (
            <DivInfoUser>
              <NameEmail>
                <p>{user.nome}</p>
                <p>{user.email}</p>
              </NameEmail>

              <button>
                <DocumentIcon />
                Termo de portabilidade
              </button>

              {user?.admin && (
                <button type="button">
                  <DocumentIcon />
                  Criar Usuario
                </button>
              )}

              <button>
                <LogoutIcon />
                Sair
              </button>
            </DivInfoUser>
          )}
        </DivIcon>
      </Div>
    </Nav>
  );
}
