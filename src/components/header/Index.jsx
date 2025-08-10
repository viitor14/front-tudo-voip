import { useState } from 'react';
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
                <p>Nome</p>
                <p>Email@gmail.com</p>
              </NameEmail>

              <button>
                <DocumentIcon />
                Termo de portabilidade
              </button>
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
