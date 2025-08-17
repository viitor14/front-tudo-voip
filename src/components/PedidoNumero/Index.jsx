import { useState } from 'react';

import { DivPedidoNumero, DivInputRadio, InputRadio } from './styled';

import NumeroIndividual from './NumeroIndividual';
import NumeroRange from './NumeroRange';

export default function PedidoNumero({ display }) {
  // 1. Estado para controlar o modo ('individual' ou 'range')
  const [modo, setModo] = useState('individual');
  const [numbers, setNumbers] = useState([{ id: Date.now(), value: '' }]);

  // --- FUNÇÕES ---
  // Função para mudar o modo
  const handleModoChange = (event) => {
    setModo(event.target.value);
  };

  // Suas funções para o modo individual (sem alterações)
  const handleAddNumber = () => {
    setNumbers([...numbers, { id: Date.now(), value: '' }]);
  };

  const handleRemoveNumber = (idToRemove) => {
    if (numbers.length > 1) {
      setNumbers(numbers.filter((number) => number.id !== idToRemove));
    }
  };

  const handleNumberChange = (id, event) => {
    const newNumbers = numbers.map((number) => {
      if (number.id === id) {
        return { ...number, value: event.target.value };
      }
      return number;
    });
    setNumbers(newNumbers);
  };
  return (
    <DivPedidoNumero style={{ display: display }}>
      <DivInputRadio>
        <InputRadio>
          <input
            type="radio"
            id="individual"
            value="individual"
            name="tipoNumero"
            checked={modo === 'individual'}
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
            checked={modo === 'range'}
            onChange={handleModoChange}
          />
          <label htmlFor="range">Em faixa (Range)</label>
        </InputRadio>
      </DivInputRadio>

      {modo === 'individual' ? (
        <NumeroIndividual
          numbers={numbers}
          onNumberChange={handleNumberChange}
          onAddNumber={handleAddNumber}
          onRemoveNumber={handleRemoveNumber}
        />
      ) : (
        <NumeroRange />
      )}
    </DivPedidoNumero>
  );
}
