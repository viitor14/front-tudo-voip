import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { toast } from 'react-toastify';

import InputWithIcon from '../../components/Input/Index';
import { DivMain, DivLogo, DivLogin, TitleLogin, FormInputs, ButtonLogin } from './styled';

import * as actions from '../../store/modules/auth/actions';

import Logo from './img/logo.png';

export default function Cadastro() {
  const [cpf, setCpf] = useState('');
  const [nome_completo, setNome_completo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    let formErrors = false;
    if (!cpf.trim()) {
      toast.error('Digite um CPF');
      formErrors = true;
      return;
    }
    if (password.trim()) {
      toast.error('Informe uma senha');
      formErrors = true;
      return;
    }
    if (!nome_completo.trim()) {
      toast.error('Informe um nome');
      formErrors = true;
      return;
    }
    if (!email.trim()) {
      toast.error('Informe um email');
      formErrors = true;
      return;
    }

    if (!formErrors) {
      dispatch(actions.loginRequest({ cpf, nome_completo, password, email }));
    }
  }

  return (
    <DivMain>
      <DivLogo>
        <img src={Logo} alt="" />
      </DivLogo>
      <DivLogin>
        <TitleLogin>
          <p>Faça a realização de um novo cadastro</p>
          <p>Insira suas credenciais para novo usuário</p>
        </TitleLogin>
        <FormInputs onSubmit={handleSubmitForm}>
          <label>
            <p>CPF</p>
            <InputWithIcon
              placeholder="00.000.000/0000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </label>

          <label>
            <p>Nome Completo</p>
            <InputWithIcon
              placeholder="Nome completo"
              value={nome_completo}
              onChange={(e) => setNome_completo(e.target.value)}
            />
          </label>
          <label>
            <p>Email</p>
            <InputWithIcon
              placeholder="000.000.000.00"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <InputWithIcon
              placeholder=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <ButtonLogin>
            <button type="submit">Criar novo Usuário</button>
          </ButtonLogin>
        </FormInputs>
      </DivLogin>
    </DivMain>
  );
}
