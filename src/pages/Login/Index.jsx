import { useDispatch } from 'react-redux';

import InputWithIcon from '../../components/Input/Index';
import { DivMain, DivLogo, DivLogin, TitleLogin, DivInputs, ButtonLogin } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

import Logo from './img/logo.png';

export default function Login() {
  const dispatch = useDispatch();
  //dispatch - usadora para disparar ações
  //ação - descrever para redux o que deve fazer

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <DivMain>
      <DivLogo>
        <img src={Logo} alt="" />
      </DivLogo>
      <DivLogin>
        <TitleLogin>
          <p>Faça login na sua conta</p>
          <p>Insira suas credenciais para acessar o painel</p>
        </TitleLogin>
        <DivInputs>
          <label>
            <p>CPF/CPNJ</p>
            <InputWithIcon placeholder="00.000.000/0000-00" />
          </label>
          <label>
            <p>Senha</p>
            <InputWithIcon placeholder="" />
          </label>
          <ButtonLogin>
            <button>Fazer Login</button>
          </ButtonLogin>
        </DivInputs>
      </DivLogin>
    </DivMain>
  );
}
