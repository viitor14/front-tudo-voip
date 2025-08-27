// src/components/CadastroPedido/index.jsx

import React, { useState } from 'react';
import { toast } from 'react-toastify';

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
import ResumoPedido from '../ResumoPedido/Index';
import NovoNumero from '../NovoNumero/Index';
import IconNavigation from '../IconNavigation/Index';

export default function CadastroPedido({ onClose }) {
  const [etapa, setEtapa] = useState(1);
  const [errors, setErrors] = useState({});

  // A ÚNICA FONTE DA VERDADE PARA TODOS OS DADOS DO FORMULÁRIO
  const [formData, setFormData] = useState({
    cpfCnpj: '',
    nomeCompleto: '',
    uf: 'Selecione',
    cn: 'Selecione',
    cidade: 'Selecione',
    tipoVenda: 'Novo Numero',
    quantidadeNumero: 1,
    // Estado para a Etapa 2
    modo: 'individual',
    numerosIndividuais: [{ id: Date.now(), value: '' }],
    ranges: [{ id: Date.now(), prefixo: '', rangeInicial: '', rangeFinal: '' }],
    // Estado para a Etapa 3
    observacoes: '',
    aceitouTermos: false
  });

  console.log(
    '%c[PAI - CadastroPedido] RENDERIZANDO com formData:',
    'color: green; font-weight: bold;',
    formData
  );

  const handleFormChange = (campo, valor) => {
    console.log(
      `[PAI - CadastroPedido] handleFormChange chamado para atualizar o campo '${campo}' para o valor '${valor}'`
    );
    setFormData((dadosAnteriores) => {
      const newState = { ...dadosAnteriores, [campo]: valor };
      console.log('[PAI - CadastroPedido] Estado ANTERIOR:', dadosAnteriores);
      console.log('[PAI - CadastroPedido] Estado NOVO:', newState);
      return newState;
    });
  };

  // Função de validação para a Etapa 1
  const validateStep1 = () => {
    const newErrors = {};
    const docLimpo = formData.cpfCnpj.replace(/\D/g, '');
    if (docLimpo.length !== 11 && docLimpo.length !== 14)
      newErrors.cpfCnpj = 'CPF ou CNPJ inválido.';
    if (!formData.nomeCompleto.trim()) newErrors.nomeCompleto = 'O nome é obrigatório.';
    if (formData.uf === 'Selecione') newErrors.uf = 'Selecione uma UF.';
    if (formData.cn === 'Selecione') newErrors.cn = 'Selecione um CN.';
    if (formData.cidade === 'Selecione') newErrors.cidade = 'Selecione uma cidade.';
    return newErrors;
  };

  // Funções de navegação
  const proximaEtapa = () => {
    if (etapa === 1) {
      const validationErrors = validateStep1();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toast.error('Por favor, corrija os campos destacados.');
        return;
      }
    }
    setErrors({}); // Limpa os erros ao avançar
    if (etapa < 3) setEtapa((etapaAtual) => etapaAtual + 1);
  };

  const etapaAnterior = () => {
    if (etapa > 1) setEtapa((etapaAtual) => etapaAtual - 1);
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
              <FormularioCliente dados={formData} onFormChange={handleFormChange} errors={errors} />
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
            <ButtonNext>Concluir Pedido</ButtonNext>
          )}
        </ContainerBotoes>
      </ModalContent>
    </ModalOverlay>
  );
}
