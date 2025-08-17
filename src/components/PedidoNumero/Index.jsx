import { useState } from 'react';

import {
  DivPedidoNumero,
  DivInputRadio,
  InputRadio,
  DivInputsNumber,
  DivLixeira,
  LabelNumber,
  Labell,
  StyledTrashIcon
} from './styled';

import InputWithIcon from '../Input/Index';

export default function PedidoNumero({ display }) {
  const [numbers, setNumbers] = useState([{ id: Date.now(), value: '' }]);

  const handleAddNumber = () => {
    setNumbers([...numbers, { id: Date.now(), value: '' }]);
  };

  // Função para remover
  const handleRemoveNumber = (idToRemove) => {
    if (numbers.length > 1) {
      setNumbers(numbers.filter((number) => number.id !== idToRemove));
    }
  };

  // Função para lidar com a mudança de valor no input
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
    <DivPedidoNumero style={{ display: display || 'flex' }}>
      <DivInputRadio>
        <InputRadio>
          <input
            type="radio"
            id="individualmente"
            name="tipoNumero"
            value="Adicionar Individualmente"
          />
          <label htmlFor="individualmente">Adicionar Individualmente</label>
        </InputRadio>

        <InputRadio>
          <input type="radio" id="range" name="tipoNumero" value="range" />
          <label htmlFor="range">Em faixa (Range)</label>
        </InputRadio>
      </DivInputRadio>

      <DivInputsNumber>
        <Labell>
          <p>Números</p>
        </Labell>

        {numbers.map((numberItem, index) => (
          <LabelNumber key={numberItem.id}>
            <InputWithIcon
              placeholder="00.000.000/0000-00"
              width="100%"
              value={numberItem.value}
              onChange={(e) => handleNumberChange(numberItem.id, e)}
            />
            {index > 0 && (
              <DivLixeira>
                <StyledTrashIcon onClick={() => handleRemoveNumber(numberItem.id)} />
              </DivLixeira>
            )}
          </LabelNumber>
        ))}

        <button type="button" onClick={handleAddNumber}>
          + Adicionar outro número
        </button>
      </DivInputsNumber>
    </DivPedidoNumero>
  );
}
