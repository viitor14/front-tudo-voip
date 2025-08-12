import { ModalOverlay, ModalContent, CloseButton, Label, DivInputRegion } from './styled';

import { useState } from 'react';

import Select from '../select/Index';

import IconNavigation from '../IconNavigation/Index';
import InputWithIcon from '../Input/Index';

export default function CadastroPedido({ onClose }) {
  const [ufSelected, setUfSelected] = useState('Selecione');
  const [cnSelected, setCnSelected] = useState('Selecione');
  const [cidadeSelected, setCidadeSelected] = useState('Selecione');
  const [openSelectId, setOpenSelectId] = useState(null);

  // Função para gerenciar qual select está aberto
  const handleSelectOpen = (selectId) => {
    setOpenSelectId(selectId);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <div>
          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>Cadastro de Pedido</h2>
        </div>
        <IconNavigation />
        <div>
          <Label htmlFor="">
            <p>CPF/CNPJ</p>
            <InputWithIcon placeholder="00.000.000/0000-00" />
          </Label>
        </div>
        <div>
          <Label htmlFor="">
            <p>Nome Completo</p>
            <InputWithIcon placeholder="Nome do Cliente" />
          </Label>
        </div>
        <DivInputRegion>
          <div>
            <p>UF</p>
            <Select
              options={['Todos os Status', 'Ativo', 'Em Andamento', 'Recusado']}
              onChange={(value) => setUfSelected(value)}
              value={ufSelected}
              height="44px"
              marginTop="-20px"
              width="100%"
              isOpen={openSelectId === 'uf'}
              onOpen={() => handleSelectOpen('uf')}
            />
          </div>
          <div>
            <p>CN</p>
            <Select
              options={['Todos os Status', 'Ativo', 'Em Andamento', 'Recusado']}
              onChange={(value) => setCnSelected(value)}
              value={cnSelected}
              height="44px"
              marginTop="-20px"
              width="100%"
              isOpen={openSelectId === 'cn'}
              onOpen={() => handleSelectOpen('cn')}
            />
          </div>
          <div>
            <p>Cidade</p>
            <Select
              options={['Todos os Status', 'Ativo', 'Em Andamento', 'Recusado']}
              onChange={(value) => setCidadeSelected(value)}
              value={cidadeSelected}
              height="44px"
              marginTop="-20px"
              width="100%"
              isOpen={openSelectId === 'cidade'}
              onOpen={() => handleSelectOpen('cidade')}
            />
          </div>
        </DivInputRegion>
      </ModalContent>
    </ModalOverlay>
  );
}
