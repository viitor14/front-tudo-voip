import { ModalOverlay, ModalContent, CloseButton } from './styled';

import IconNavigation from '../IconNavigation/Index';

export default function CadastroPedido({ onClose }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <div>
          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>Cadastro de Pedido</h2>
        </div>
        <IconNavigation />
      </ModalContent>
    </ModalOverlay>
  );
}
