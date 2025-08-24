import { useState, useEffect } from 'react';

import { Label, DivInputRegion, DivTypeCell, DivInputRadio, DivContentSon } from './styled';

import Select from '../select/Index';
import InputWithIcon from '../Input/Index';

import estadosData from './assets/ESTADOS.json';
import cidadesData from './assets/CIDADES.json';
import zonasData from './assets/ZONA TELEFONICA - DDD.json';

export default function FormularioCliente({ dados, onFormChange }) {
  // Estado para controlar qual menu select está aberto
  const [openSelectId, setOpenSelectId] = useState(null);
  const [opcoesUF, setOpcoesUF] = useState([]);
  const [opcoesCN, setOpcoesCN] = useState([]); // CN = Centro Numérico (DDD)
  const [opcoesCidade, setOpcoesCidade] = useState([]);

  const formatarTexto = (texto) => {
    if (!texto) return '';
    const textoEmMinusculo = texto.toLowerCase();
    return textoEmMinusculo.charAt(0).toUpperCase() + textoEmMinusculo.slice(1);
  };

  useEffect(() => {
    // Extrai os nomes dos estados e formata-os
    const ufs = estadosData.map((estado) => formatarTexto(estado.nome_estado));
    setOpcoesUF(ufs);
  }, []);

  useEffect(() => {
    if (dados.uf) {
      const ufSelecionada = dados.uf.toUpperCase();

      // Filtra as cidades que pertencem ao estado selecionado
      const cidadesFiltradas = cidadesData.filter((cidade) => cidade.nome_estado === ufSelecionada);

      // Extrai as áreas telefónicas (CNs) únicas para essa UF
      const cnsUnicos = [...new Set(cidadesFiltradas.map((cidade) => cidade.area_telefonica))];
      setOpcoesCN(cnsUnicos);

      // Extrai os nomes das cidades para essa UF
      const nomesCidades = cidadesFiltradas.map((cidade) => formatarTexto(cidade.nome_cidade));
      setOpcoesCidade(nomesCidades);

      // Limpa a cidade selecionada anteriormente se a UF mudar
      onFormChange('cidade', '');
      onFormChange('cn', '');
    } else {
      // Se nenhuma UF for selecionada, limpa as opções de CN e Cidade
      setOpcoesCN([]);
      setOpcoesCidade([]);
    }
  }, [dados.uf]);

  // 3. Efeito para atualizar as Cidades quando o CN muda (filtro adicional)
  useEffect(() => {
    if (dados.cn) {
      const ufSelecionada = dados.uf.toUpperCase();
      const cnSelecionado = parseInt(dados.cn, 10);

      // Filtra as cidades que pertencem à UF e ao CN selecionados
      const cidadesFiltradas = cidadesData.filter(
        (cidade) => cidade.nome_estado === ufSelecionada && cidade.area_telefonica === cnSelecionado
      );

      const nomesCidades = cidadesFiltradas.map((cidade) => formatarTexto(cidade.nome_cidade));
      setOpcoesCidade(nomesCidades);

      // Limpa a cidade selecionada anteriormente se o CN mudar
      onFormChange('cidade', '');
    }
  }, [dados.cn]);

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
            options={opcoesUF}
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
            options={opcoesCN}
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
            options={opcoesCidade}
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
