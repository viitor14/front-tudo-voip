import { ModalOverlay, ModalContent, CloseButton } from './styled';

import IconNavigation from '../IconNavigation/Index';
import InputWithIcon from '../Input/Index';

export default function CadastroPedido({ onClose }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <div>
          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>Cadastro de Pedido</h2>
        </div>
        <IconNavigation />
        <div>
          <label htmlFor="">
            CPF
            <InputWithIcon placeholder="00.000.000/0000-00" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            CPF
            <InputWithIcon placeholder="00.000.000/0000-00" />
          </label>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
}
