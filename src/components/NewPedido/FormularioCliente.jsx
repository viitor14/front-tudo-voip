import { useState } from 'react';

import { Label, DivInputRegion, DivTypeCell, DivInputRadio, DivContentSon } from './styled';

import Select from '../select/Index';
import InputWithIcon from '../Input/Index';

export default function FormularioCliente({ dados, onFormChange }) {
  // Estado para controlar qual menu select está aberto
  const [openSelectId, setOpenSelectId] = useState(null);

  // Função para gerenciar qual select está aberto
  const handleSelectOpen = (selectId) => {
    // Se o select clicado já estiver aberto, fecha. Senão, abre.
    setOpenSelectId(openSelectId === selectId ? null : selectId);
  };

  return (
    <DivContentSon>
      <div>
        <Label>
          <p>CPF/CNPJ</p>
          <InputWithIcon
            placeholder="00.000.000/0000-00"
            value={dados.cpfCnpj}
            onChange={(e) => onFormChange('cpfCnpj', e.target.value)}
          />
        </Label>
      </div>

      <div>
        <Label>
          <p>Nome Completo</p>
          <InputWithIcon
            placeholder="Nome do Cliente"
            value={dados.nomeCompleto}
            onChange={(e) => onFormChange('nomeCompleto', e.target.value)}
          />
        </Label>
      </div>

      <DivInputRegion>
        <div>
          <p>UF</p>
          <Select
            options={['SP', 'RJ', 'MG', 'BA']}
            width="100%"
            height="44px"
            marginTop="-20px"
            onChange={(value) => onFormChange('uf', value)}
            value={dados.uf}
            isOpen={openSelectId === 'uf'}
            onOpen={() => handleSelectOpen('uf')}
          />
        </div>
        <div>
          <p>CN</p>
          <Select
            options={['Exemplo CN 1', 'Exemplo CN 2']}
            width="100%"
            height="44px"
            marginTop="-20px"
            value={dados.cn}
            onChange={(value) => onFormChange('cn', value)}
            isOpen={openSelectId === 'cn'}
            onOpen={() => handleSelectOpen('cn')}
          />
        </div>
        <div>
          <p>Cidade</p>
          <Select
            options={['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']}
            width="100%"
            height="44px"
            marginTop="-20px"
            value={dados.cidade}
            onChange={(value) => onFormChange('cidade', value)}
            isOpen={openSelectId === 'cidade'}
            onOpen={() => handleSelectOpen('cidade')}
          />
        </div>
      </DivInputRegion>

      <DivTypeCell>
        <p>Tipo de venda</p>
        <DivInputRadio>
          <input
            type="radio"
            id="novo-numero"
            name="tipoVenda"
            value="Novo Numero"
            checked={dados.tipoVenda === 'Novo Numero'}
            onChange={(e) => onFormChange('tipoVenda', e.target.value)}
          />
          <label htmlFor="novo-numero">Novo Número</label>
        </DivInputRadio>
        <DivInputRadio>
          <input
            type="radio"
            id="portabilidade"
            name="tipoVenda"
            value="Portabilidade"
            checked={dados.tipoVenda === 'Portabilidade'}
            onChange={(e) => onFormChange('tipoVenda', e.target.value)}
          />
          <label htmlFor="portabilidade">Portabilidade</label>
        </DivInputRadio>
      </DivTypeCell>
    </DivContentSon>
  );
}
