import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import cidadesData from './assets/CIDADES.json';
import tiposVendaData from './assets/TIPOS_VENDA.json';

import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  DivModal,
  ButtonNext,
  DivIcon,
  DivContent,
  ContainerBotoes,
  BotaoVoltar,
  StyledIconBack
} from './styled';

import FormularioCliente from './FormularioCliente';
import PedidoNumero from '../PedidoNumero/Index';
import IconNavigation from '../IconNavigation/Index';
import ResumoPedido from '../ResumoPedido/Index';
import NovoNumero from '../NovoNumero/Index';

const formatarTexto = (texto) => {
  if (!texto) return '';
  const textoEmMinusculo = texto.toLowerCase();
  return textoEmMinusculo.charAt(0).toUpperCase() + textoEmMinusculo.slice(1);
};

export default function CadastroPedido({ onClose, onPedidoCriado }) {
  const [etapa, setEtapa] = useState(1);

  const [formData, setFormData] = useState({
    cpfCnpj: '',
    nomeCompleto: '',
    uf: 'Selecione',
    cn: 'Selecione',
    cidade: 'Selecione',
    tipoVenda: 'Novo Numero',
    modo: 'individual',
    quantidadeNumero: 1,
    numerosIndividuais: [{ id: Date.now(), value: '' }],
    ranges: [{ id: Date.now(), prefixo: '', rangeInicial: '', rangeFinal: '' }]
  });

  const handleFormChange = (campo, valor) => {
    setFormData((dadosAnteriores) => ({
      ...dadosAnteriores,
      [campo]: valor
    }));
  };

  const proximaEtapa = () => {
    setEtapa((etapaAtual) => etapaAtual + 1);
  };

  const etapaAnterior = () => {
    setEtapa((etapaAtual) => etapaAtual - 1);
  };

  const handleSubmit = async () => {
    //setIsLoading(true);

    // 1. Traduz os nomes para códigos
    const cidadeSelecionada = cidadesData.find(
      (c) => formatarTexto(c.nome_cidade) === formData.cidade
    );
    const tipoVendaSelecionado = tiposVendaData.find(
      (tv) => tv.tipo_venda === formData.tipoVenda.toUpperCase()
    );

    if (!cidadeSelecionada || !tipoVendaSelecionado) {
      toast.error('Por favor, preencha todos os campos corretamente.');
      //setIsLoading(false);
      return;
    }

    // 2. Monta o objeto final no formato que a API espera
    const dadosParaApi = {
      cod_cidade: cidadeSelecionada.cod_cidade,
      cod_tipo_venda: tipoVendaSelecionado.cod_tipo_venda,
      observacoes: formData.observacoes
    };

    // Adiciona os campos de pessoa física ou jurídica
    if (formData.cpfCnpj.length <= 11) {
      dadosParaApi.cpf = formData.cpfCnpj;
      dadosParaApi.nome_completo = formData.nomeCompleto;
    } else {
      dadosParaApi.cnpj = formData.cpfCnpj;
      dadosParaApi.nome_empresa = formData.nomeCompleto;
    }

    // Adiciona os detalhes do tipo de venda
    if (tipoVendaSelecionado.cod_tipo_venda === 1) {
      // Novo Número
      dadosParaApi.quantidade_novos_numeros = parseInt(formData.quantidadeNumero, 10);
    } else {
      // Portabilidade
      dadosParaApi.numeros_portabilidade = formData.numerosIndividuais
        .map((n) => n.value)
        .filter(Boolean); // Filtra números vazios
    }

    // 3. Envia a requisição para a API

    try {
      await axios.post('/pedido', dadosParaApi);
      toast.success('Pedido criado com sucesso!');
      onPedidoCriado();
      console.log(dadosParaApi);
      onClose(); // Fecha o modal em caso de sucesso
    } catch (error) {
      const errors = error.response?.data?.errors || ['Ocorreu um erro.'];
      errors.forEach((err) => toast.error(err));
    } finally {
      //setIsLoading(false);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <DivModal>
          <div>
            <CloseButton onClick={onClose}>X</CloseButton>
            <h2>Cadastro de Pedido</h2>
          </div>
          <DivIcon>
            <IconNavigation currentStep={etapa} />
          </DivIcon>

          <DivContent>
            {etapa === 1 && (
              <FormularioCliente dados={formData} onFormChange={handleFormChange} /> // Mostra os campos do cliente na etapa 1
            )}
            {etapa === 2 && (
              <>
                {formData.tipoVenda === 'Novo Numero' ? (
                  <NovoNumero formData={formData} onFormChange={handleFormChange} />
                ) : (
                  <PedidoNumero dados={formData} onFormChange={handleFormChange} />
                )}
              </>
            )}
            {etapa === 3 && <ResumoPedido formData={formData} onFormChange={handleFormChange} />}
          </DivContent>
        </DivModal>

        <ContainerBotoes>
          {etapa > 1 ? (
            <BotaoVoltar onClick={etapaAnterior}>
              <StyledIconBack />
              <span>Voltar</span>
            </BotaoVoltar>
          ) : (
            <div />
          )}

          {etapa < 3 ? (
            <ButtonNext onClick={proximaEtapa}>Avançar</ButtonNext>
          ) : (
            <ButtonNext onClick={handleSubmit}>Concluir Pedido</ButtonNext>
          )}
        </ContainerBotoes>
      </ModalContent>
    </ModalOverlay>
  );
}
