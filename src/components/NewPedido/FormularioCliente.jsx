// Nome do arquivo: FormularioCliente.jsx

import { useState } from 'react';

// Importe os componentes de estilo necessários do seu arquivo `styled.js`
import { Label, DivInputRegion, DivTypeCell, DivInputRadio, DivContentSon } from './styled';

// Importe os componentes customizados que você usa
import Select from '../select/Index';
import InputWithIcon from '../Input/Index';

export default function FormularioCliente({ tipoVendaSelecionado, onTipoVendaChange }) {
  const [ufSelected, setUfSelected] = useState('Selecione');
  const [cnSelected, setCnSelected] = useState('Selecione');
  const [cidadeSelected, setCidadeSelected] = useState('Selecione');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');

  // Estado para controlar qual menu select está aberto
  const [openSelectId, setOpenSelectId] = useState(null);

  // Função para gerenciar qual select está aberto
  const handleSelectOpen = (selectId) => {
    // Se o select clicado já estiver aberto, fecha. Senão, abre.
    setOpenSelectId(openSelectId === selectId ? null : selectId);
  };

  const handleRadioChange = (event) => {
    onTipoVendaChange(event.target.value);
  };

  // --- JSX DO FORMULÁRIO DA ETAPA 1 ---
  return (
    <DivContentSon>
      <div>
        <Label>
          <p>CPF/CNPJ</p>
          <InputWithIcon
            placeholder="00.000.000/0000-00"
            value={cpfCnpj}
            onChange={(e) => setCpfCnpj(e.target.value)}
          />
        </Label>
      </div>

      <div>
        <Label>
          <p>Nome Completo</p>
          <InputWithIcon
            placeholder="Nome do Cliente"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
        </Label>
      </div>

      <DivInputRegion>
        <div>
          <p>UF</p>
          <Select
            options={['SP', 'RJ', 'MG', 'BA']} // Exemplo de opções
            width="100%"
            height="44px"
            marginTop="-20px"
            onChange={(value) => setUfSelected(value)}
            value={ufSelected}
            isOpen={openSelectId === 'uf'}
            onOpen={() => handleSelectOpen('uf')}
            // ...outras props
          />
        </div>
        <div>
          <p>CN</p>
          <Select
            options={['Exemplo CN 1', 'Exemplo CN 2']}
            width="100%"
            height="44px"
            marginTop="-20px"
            onChange={(value) => setCnSelected(value)}
            value={cnSelected}
            isOpen={openSelectId === 'cn'}
            onOpen={() => handleSelectOpen('cn')}
            // ...outras props
          />
        </div>
        <div>
          <p>Cidade</p>
          <Select
            options={['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']}
            width="100%"
            height="44px"
            marginTop="-20px"
            onChange={(value) => setCidadeSelected(value)}
            value={cidadeSelected}
            isOpen={openSelectId === 'cidade'}
            onOpen={() => handleSelectOpen('cidade')}
            // ...outras props
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
            checked={tipoVendaSelecionado === 'Novo Numero'} // Define se está marcado
            onChange={handleRadioChange}
          />
          <label htmlFor="novo-numero">Novo Número</label>
        </DivInputRadio>
        <DivInputRadio>
          <input
            type="radio"
            id="portabilidade"
            name="tipoVenda"
            value="Portabilidade"
            checked={tipoVendaSelecionado === 'Portabilidade'}
            onChange={handleRadioChange}
          />
          <label htmlFor="portabilidade">Portabilidade</label>
        </DivInputRadio>
      </DivTypeCell>
    </DivContentSon>
  );
}
