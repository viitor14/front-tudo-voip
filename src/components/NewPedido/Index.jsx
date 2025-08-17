import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  DivModal,
  ButtonNext,
  DivIcon,
  DivContent
} from './styled';

import { useState } from 'react';

import FormularioCliente from './FormularioCliente';
import PedidoNumero from '../PedidoNumero/Index';
import IconNavigation from '../IconNavigation/Index';
import ResumoPedido from '../ResumoPedido/Index';

export default function CadastroPedido({ onClose }) {
  const [etapa, setEtapa] = useState(1);

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
            {/* O stepper agora é controlado diretamente pelo estado 'etapa' */}
            <IconNavigation currentStep={etapa} />
          </DivIcon>

          {/* 2. LÓGICA DE RENDERIZAÇÃO CENTRALIZADA E LIMPA */}
          <DivContent>
            {etapa === 1 && (
              <FormularioCliente /> // Mostra os campos do cliente na etapa 1
            )}
            {etapa === 2 && (
              <PedidoNumero /> // Mostra os campos de número na etapa 2
            )}
            {etapa === 3 && <ResumoPedido />}
          </DivContent>
        </DivModal>
        {/* Lógica para mostrar/esconder botões também pode usar 'etapa' */}
        {etapa < 3 && ( // Mostra o botão "Avançar" apenas se não for a última etapa
          <ButtonNext onClick={proximaEtapa}>Avançar</ButtonNext>
        )}
        {etapa === 3 && ( // Mostra o botão "Finalizar" na última etapa
          <ButtonNext>Finalizar</ButtonNext>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}
