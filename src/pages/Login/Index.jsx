import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';

import InputWithIcon from '../../components/Input/Index';
import Loading from '../../components/Loading/Index';

import { DivMain, DivLogo, DivLogin, TitleLogin, FormInputs, ButtonLogin } from './styled';

import * as actions from '../../store/modules/auth/actions';

import Logo from './img/logo.png';

export default function Login() {
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.auth.isLoading);

  function handleSubmitForm(e) {
    e.preventDefault();
    let formErrors = false;
    if (!documento.trim() || !password.trim()) {
      toast.error('Digite CPF/CNPJ e senha');
      formErrors = true;
      return;
    }

    if (!formErrors) {
      dispatch(actions.loginRequest({ documento, senha: password }));
    }
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <DivMain>
        <DivLogo>
          <img src={Logo} alt="" />
        </DivLogo>
        <DivLogin>
          <TitleLogin>
            <p>Faça login na sua conta</p>
            <p>Insira suas credenciais para acessar o painel</p>
          </TitleLogin>
          <FormInputs onSubmit={handleSubmitForm}>
            <label>
              <p>CPF/CPNJ</p>
              <InputWithIcon
                placeholder="00.000.000/0000-00"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
            </label>
            <label>
              <p>Senha</p>
              <InputWithIcon
                placeholder=""
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <ButtonLogin>
              <button type="submit">Fazer Login</button>
            </ButtonLogin>
          </FormInputs>
        </DivLogin>
      </DivMain>
    </>
  );
}
