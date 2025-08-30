import { useState, useEffect } from 'react';
import {
  Label,
  DivInputRegion,
  DivTypeCell,
  DivInputRadio,
  DivContentSon,
  ErrorMessage
} from './styled';
import Select from '../select/Index';
import InputWithIcon from '../Input/Index';
import estadosData from './assets/ESTADOS.json';
import cidadesData from './assets/CIDADES.json';

import { formatarTexto } from '../../utils/formatters';

export default function FormularioCliente({ dados, onFormChange, errors, onBlur }) {
  const [openSelectId, setOpenSelectId] = useState(null);
  const [opcoesUF, setOpcoesUF] = useState([]);
  const [opcoesCN, setOpcoesCN] = useState([]);
  const [opcoesCidade, setOpcoesCidade] = useState([]);

  const handleUfChange = (novaUf) => {
    onFormChange('uf', novaUf);
    onFormChange('cn', 'Selecione');
    onFormChange('cidade', 'Selecione');
  };

  const handleCnChange = (novoCn) => {
    onFormChange('cn', novoCn);
    onFormChange('cidade', 'Selecione');
  };

  const handleSelectOpen = (selectId) => {
    setOpenSelectId(openSelectId === selectId ? null : selectId);
  };

  useEffect(() => {
    const ufsFormatadas = estadosData.map((estado) => ({
      value: estado.cod_estado,
      label: formatarTexto(estado.nome_estado)
    }));

    setOpcoesUF(ufsFormatadas);
  }, []);

  useEffect(() => {
    if (dados.uf && dados.uf !== 'Selecione') {
      const estadoSelecionado = estadosData.find((e) => e.cod_estado === dados.uf);
      if (!estadoSelecionado) return;
      const nomeEstadoSelecionado = estadoSelecionado.nome_estado.toUpperCase();
      const cidadesFiltradas = cidadesData.filter(
        (cidade) => cidade.nome_estado.toUpperCase() === nomeEstadoSelecionado
      );

      const cnsUnicos = [...new Set(cidadesFiltradas.map((cidade) => cidade.area_telefonica))];
      const cnsFormatados = cnsUnicos.map((cn) => ({ value: cn, label: cn.toString() }));
      setOpcoesCN(cnsFormatados);
      const cidadesFormatadas = cidadesFiltradas.map((cidade) => ({
        value: formatarTexto(cidade.nome_cidade),
        label: formatarTexto(cidade.nome_cidade)
      }));
      setOpcoesCidade(cidadesFormatadas);
    } else {
      setOpcoesCN([]);
      setOpcoesCidade([]);
    }
  }, [dados.uf]);

  useEffect(() => {
    if (dados.cn && dados.cn !== 'Selecione' && dados.uf) {
      const estadoSelecionado = estadosData.find((e) => e.cod_estado === dados.uf);
      if (!estadoSelecionado) return;
      const nomeEstadoSelecionado = estadoSelecionado.nome_estado.toUpperCase();
      const cnSelecionado = parseInt(dados.cn, 10);
      const cidadesFiltradas = cidadesData.filter(
        (cidade) =>
          cidade.nome_estado.toUpperCase() === nomeEstadoSelecionado &&
          cidade.area_telefonica === cnSelecionado
      );
      const cidadesFormatadas = cidadesFiltradas.map((cidade) => ({
        value: formatarTexto(cidade.nome_cidade),
        label: formatarTexto(cidade.nome_cidade)
      }));
      setOpcoesCidade(cidadesFormatadas);
    }
  }, [dados.cn, dados.uf]);

  return (
    <DivContentSon>
      <div>
        <Label>
          <p>CPF/CNPJ</p>
          <InputWithIcon
            name="cpfCnpj"
            placeholder="00.000.000/0000-00"
            value={dados.cpfCnpj}
            onChange={(e) => onFormChange('cpfCnpj', e.target.value)}
            onBlur={onBlur}
            hasError={!!errors.cpfCnpj}
          />
          {errors.cpfCnpj && <ErrorMessage>{errors.cpfCnpj}</ErrorMessage>}
        </Label>
      </div>

      <div>
        <Label>
          <p>Nome Completo</p>
          <InputWithIcon
            name="nomeCompleto"
            placeholder="Nome do Cliente"
            value={dados.nomeCompleto}
            onChange={(e) => onFormChange('nomeCompleto', e.target.value)}
            onBlur={onBlur}
            hasError={!!errors.nomeCompleto}
          />
          {errors.nomeCompleto && <ErrorMessage>{errors.nomeCompleto}</ErrorMessage>}
        </Label>
      </div>

      <DivInputRegion>
        <div>
          <p>UF</p>
          <Select
            options={opcoesUF}
            value={dados.uf}
            onChange={handleUfChange}
            isOpen={openSelectId === 'uf'}
            onToggle={() => handleSelectOpen('uf')}
            hasError={!!errors.uf}
            width="100%"
            height="auto"
            marginTop="-20px"
          />
          {errors.uf && <ErrorMessage>{errors.uf}</ErrorMessage>}
        </div>
        <div>
          <p>CN</p>
          <Select
            options={opcoesCN}
            value={dados.cn}
            onChange={handleCnChange}
            isOpen={openSelectId === 'cn'}
            onToggle={() => handleSelectOpen('cn')}
            hasError={!!errors.cn}
            width="100%"
            height="auto"
          />
          {errors.cn && <ErrorMessage>{errors.cn}</ErrorMessage>}
        </div>
        <div>
          <p>Cidade</p>
          <Select
            options={opcoesCidade}
            value={dados.cidade}
            onChange={(value) => onFormChange('cidade', value)}
            isOpen={openSelectId === 'cidade'}
            onToggle={() => handleSelectOpen('cidade')}
            hasError={!!errors.cidade}
            width="100%"
            height="auto"
            marginTop="-20px"
          />
          {errors.cidade && <ErrorMessage>{errors.cidade}</ErrorMessage>}
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
