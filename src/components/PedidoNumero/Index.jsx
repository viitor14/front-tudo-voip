import { useState } from 'react';

import { DivPedidoNumero, DivInputRadio, InputRadio } from './styled';

import NumeroIndividual from './NumeroIndividual';
import NumeroRange from './NumeroRange';

export default function PedidoNumero({ dados, onFormChange }) {
  const handleModoChange = (event) => {
    onFormChange('modo', event.target.value);
  };

  const handleAddNumber = () => {
    const novosNumeros = [...dados.numerosIndividuais, { id: Date.now(), value: '' }];
    onFormChange('numerosIndividuais', novosNumeros);
  };

  const handleRemoveNumber = (idToRemove) => {
    if (dados.numerosIndividuais.length > 1) {
      const novosNumeros = dados.numerosIndividuais.filter((number) => number.id !== idToRemove);
      onFormChange('numerosIndividuais', novosNumeros);
    }
  };

  const handleNumberChange = (id, event) => {
    const novosNumeros = dados.numerosIndividuais.map((number) => {
      if (number.id === id) {
        return { ...number, value: event.target.value };
      }
      return number;
    });
    onFormChange('numerosIndividuais', novosNumeros);
  };

  const handleAddRange = () => {
    const novosRanges = [
      ...dados.ranges,
      { id: Date.now(), prefixo: '', rangeInicial: '', rangeFinal: '' }
    ];
    onFormChange('ranges', novosRanges);
  };

  const handleRemoveRange = (idToRemove) => {
    if (dados.ranges.length > 1) {
      const novosRanges = dados.ranges.filter((range) => range.id !== idToRemove);
      onFormChange('ranges', novosRanges);
    }
  };

  const handleRangeChange = (id, field, value) => {
    const novosRanges = dados.ranges.map((range) => {
      if (range.id === id) {
        return { ...range, [field]: value };
      }
      return range;
    });
    onFormChange('ranges', novosRanges);
  };

  return (
    <DivPedidoNumero>
      <DivInputRadio>
        <InputRadio>
          <input
            type="radio"
            id="individual"
            value="individual"
            name="tipoNumero"
            // 4. Lê o valor de 'dados.modo' vindo do pai
            checked={dados.modo === 'individual'}
            onChange={handleModoChange}
          />
          <label htmlFor="individual">Adicionar Individualmente</label>
        </InputRadio>
        <InputRadio>
          <input
            type="radio"
            id="range"
            name="tipoNumero"
            value="range"
            checked={dados.modo === 'range'}
            onChange={handleModoChange}
          />
          <label htmlFor="range">Em faixa (Range)</label>
        </InputRadio>
      </DivInputRadio>

      {dados.modo === 'individual' ? (
        <NumeroIndividual
          // 5. Passa os dados e funções corretos para o componente filho
          numbers={dados.numerosIndividuais}
          onNumberChange={handleNumberChange}
          onAddNumber={handleAddNumber}
          onRemoveNumber={handleRemoveNumber}
        />
      ) : (
        <NumeroRange
          ranges={dados.ranges}
          onAddRange={handleAddRange}
          onRemoveRange={handleRemoveRange}
          onRangeChange={handleRangeChange}
        /> // Este já se gerencia sozinho, como definimos antes
      )}
    </DivPedidoNumero>
  );
}
