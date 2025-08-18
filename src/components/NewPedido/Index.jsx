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

import { useState, useEffect } from 'react';

import FormularioCliente from './FormularioCliente';
import PedidoNumero from '../PedidoNumero/Index';
import IconNavigation from '../IconNavigation/Index';
import ResumoPedido from '../ResumoPedido/Index';
import NovoNumero from '../NovoNumero/Index';

export default function CadastroPedido({ onClose }) {
  const [etapa, setEtapa] = useState(1);

  const [formData, setFormData] = useState({
    cpfCnpj: '',
    nomeCompleto: '',
    uf: 'Selecione',
    cn: 'Selecione',
    cidade: 'Selecione',
    tipoVenda: 'Novo Numero',
    modo: 'individual',
    quantidadeNumero: '1',
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
            <ButtonNext>Concluir Pedido</ButtonNext>
          )}
        </ContainerBotoes>
      </ModalContent>
    </ModalOverlay>
  );
}
