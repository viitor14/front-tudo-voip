import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Label,
  DivInputRegion,
  DivTypeCell,
  DivInputRadio,
  DivModal,
  DivButtonNext,
  ButtonNext,
  DivIcon,
  DivContent,
  DivContentSon
} from './styled';

import { useState } from 'react';

import Select from '../select/Index';

import PedidoNumero from '../PedidoNumero/Index';
import IconNavigation from '../IconNavigation/Index';
import InputWithIcon from '../Input/Index';

export default function CadastroPedido({ onClose }) {
  const [ufSelected, setUfSelected] = useState('Selecione');
  const [cnSelected, setCnSelected] = useState('Selecione');
  const [cidadeSelected, setCidadeSelected] = useState('Selecione');
  const [openSelectId, setOpenSelectId] = useState(null);
  const [openDivModal, setOpenDivModal] = useState(true);
  const [numberIcon, setNumberIcon] = useState(1);
  const [displayPedidoNumero, setDisplayPedidoNumero] = useState('none');
  // Função para gerenciar qual select está aberto
  const handleSelectOpen = (selectId) => {
    setOpenSelectId(selectId);
  };

  const handleClickNext = () => {
    setOpenDivModal(false);
    setNumberIcon(2);
    setDisplayPedidoNumero('flex');
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
            <IconNavigation currentStep={numberIcon} />
          </DivIcon>
          <DivContent>
            <DivContentSon style={{ display: openDivModal ? 'flex' : 'none' }}>
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
              <DivButtonNext>
                <DivTypeCell>
                  <p>Tipo de venda</p>
                  <DivInputRadio>
                    <input type="radio" id="novo-numero" name="tipoVenda" value="Novo Número" />
                    <label htmlFor="novo-numero">Novo Número</label>
                  </DivInputRadio>

                  <DivInputRadio>
                    <input type="radio" id="portabilidade" name="tipoVenda" value="Portabilidade" />
                    <label htmlFor="portabilidade">Portabilidade</label>
                  </DivInputRadio>
                </DivTypeCell>
              </DivButtonNext>
            </DivContentSon>
          </DivContent>
          <PedidoNumero display={displayPedidoNumero} />
        </DivModal>
        <ButtonNext onClick={handleClickNext}>Avançar</ButtonNext>
      </ModalContent>
    </ModalOverlay>
  );
}
