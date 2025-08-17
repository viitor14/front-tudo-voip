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

import { useState } from 'react';

import FormularioCliente from './FormularioCliente';
import PedidoNumero from '../PedidoNumero/Index';
import IconNavigation from '../IconNavigation/Index';
import ResumoPedido from '../ResumoPedido/Index';
import NovoNumero from '../NovoNumero/Index';

export default function CadastroPedido({ onClose }) {
  const [etapa, setEtapa] = useState(1);
  const [tipoVenda, setTipoVenda] = useState('Novo Numero');

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
              <FormularioCliente
                tipoVendaSelecionado={tipoVenda}
                onTipoVendaChange={setTipoVenda}
              /> // Mostra os campos do cliente na etapa 1
            )}
            {etapa === 2 && <>{tipoVenda === 'Novo Numero' ? <NovoNumero /> : <PedidoNumero />}</>}
            {etapa === 3 && <ResumoPedido />}
          </DivContent>
        </DivModal>

        <ContainerBotoes>
          {etapa > 1 ? (
            <BotaoVoltar onClick={etapaAnterior}>
              <StyledIconBack />
              <span>Voltar</span>
            </BotaoVoltar>
          ) : (
            // Deixa um espaço vazio para manter o botão "Avançar" na direita
            <div />
          )}

          {/* Lógica do botão de Avançar/Finalizar que você já tinha */}
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
