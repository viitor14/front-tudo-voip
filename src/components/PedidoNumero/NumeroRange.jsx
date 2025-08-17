import { useState } from 'react';

import {
  DivInputsNumber,
  DivLixeira,
  InputsContainer,
  InputWrapper,
  LabelInput,
  StyledInput,
  StyledTrashIcon
} from './styled';

export default function NumeroRange() {
  const [ranges, setRanges] = useState([
    { id: Date.now(), prefixo: '', rangeInicial: '', rangeFinal: '' }
  ]);

  const handleAddRange = () => {
    const newRange = {
      id: Date.now(),
      prefixo: '',
      rangeInicial: '',
      rangeFinal: ''
    };
    setRanges([...ranges, newRange]);
  };

  const handleRemoveRange = (idToRemove) => {
    if (ranges.length > 1) {
      setRanges(ranges.filter((range) => range.id !== idToRemove));
    }
  };

  // Esta função é um pouco diferente: ela precisa saber qual campo (field) atualizar
  const handleRangeChange = (id, field, value) => {
    const updatedRanges = ranges.map((range) => {
      if (range.id === id) {
        // Usa o nome do campo para atualizar a propriedade correta do objeto
        return { ...range, [field]: value };
      }
      return range;
    });
    setRanges(updatedRanges);
  };
  return (
    <DivInputsNumber>
      <InputsContainer>
        <InputWrapper>
          <LabelInput>Prefixo</LabelInput>
        </InputWrapper>
        <InputWrapper>
          <LabelInput>Range Inicial</LabelInput>
        </InputWrapper>
        <InputWrapper>
          <LabelInput>Range Final</LabelInput>
        </InputWrapper>
        <DivLixeira style={{ visibility: 'hidden' }} />
      </InputsContainer>

      {ranges.map((rangeItem, index) => (
        <InputsContainer key={rangeItem.id}>
          <InputWrapper>
            <StyledInput
              id={`prefixo-${rangeItem.id}`}
              type="text"
              placeholder="Ex: 81"
              value={rangeItem.prefixo}
              onChange={(e) => {
                const valor = e.target.value;
                const limite = 2;
                if (valor.length <= limite) {
                  handleRangeChange(rangeItem.id, 'prefixo', valor);
                }
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              id={`rangeInicial-${rangeItem.id}`}
              type="number"
              placeholder="Ex: 1234"
              value={rangeItem.rangeInicial}
              onChange={(e) => {
                const valor = e.target.value;
                const limite = 5;
                if (valor.length <= limite) {
                  handleRangeChange(rangeItem.id, 'rangeInicial', valor);
                }
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              id={`rangeFinal-${rangeItem.id}`}
              type="text"
              placeholder="Ex: 5678"
              value={rangeItem.rangeFinal}
              onChange={(e) => {
                const valor = e.target.value;
                const limite = 4;
                if (valor.length <= limite) {
                  handleRangeChange(rangeItem.id, 'rangeFinal', valor);
                }
              }}
            />
          </InputWrapper>

          {index > 0 ? (
            <DivLixeira style={{ alignSelf: 'flex-end', marginBottom: '1px' }}>
              <StyledTrashIcon onClick={() => handleRemoveRange(rangeItem.id)} />
            </DivLixeira>
          ) : (
            <DivLixeira style={{ visibility: 'hidden' }} />
          )}
        </InputsContainer>
      ))}

      <button type="button" onClick={handleAddRange}>
        + Adicionar outro range
      </button>
    </DivInputsNumber>
  );
}
