import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { toast } from 'react-toastify';

import Loading from '../../components/Loading/Index';
import InputWithIcon from '../../components/Input/Index';
import { DivMain, DivLogo, DivLogin, TitleLogin, FormInputs, ButtonLogin } from './styled';

import * as actions from '../../store/modules/auth/actions';

import Logo from './img/logo.png';

export default function Cadastro() {
  const [documento, setDocumento] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    let formErrors = false;

    if (!nome.trim()) {
      toast.error('Informe o Nome Completo ou Nome da Empresa.');
      formErrors = true;
    }

    if (!documento.trim()) {
      toast.error('Informe o CPF ou CNPJ.');
      formErrors = true;
    }

    const docLimpo = documento.replace(/\D/g, '');
    if (docLimpo.length !== 11 && docLimpo.length !== 14) {
      toast.error('O CPF ou CNPJ inserido é inválido.');
      formErrors = true;
    }

    if (!email.trim()) {
      toast.error('Informe um e-mail.');
      formErrors = true;
    }

    if (!password.trim()) {
      toast.error('Informe uma senha.');
      formErrors = true;
    }

    if (formErrors) {
      return;
    }

    const dadosParaApi = {
      email,
      password
    };

    if (docLimpo.length === 11) {
      dadosParaApi.cpf = docLimpo;
      dadosParaApi.nome_completo = nome;
    } else {
      dadosParaApi.cnpj = docLimpo;
      dadosParaApi.nome_empresa = nome;
    }
    setIsLoading(true);
    dispatch(actions.registerRequest(dadosParaApi));
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
            <p>Faça a realização de um novo cadastro</p>
            <p>Insira suas credenciais para novo usuário</p>
          </TitleLogin>
          <FormInputs onSubmit={handleSubmitForm}>
            <label>
              <p>CPF/CNPJ</p>
              <InputWithIcon
                placeholder="00.000.000/0000-00"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
            </label>

            <label>
              <p>Nome Completo/Empresa</p>
              <InputWithIcon
                placeholder="Nome completo/Empresa"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <label>
              <p>Email</p>
              <InputWithIcon
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <p>Senha</p>
              <InputWithIcon
                placeholder="*******"
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
    </>
  );
}
