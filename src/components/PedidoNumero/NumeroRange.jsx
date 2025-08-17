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
      {/* --- CABEÇALHO COM OS TÍTULOS (renderizado apenas uma vez) --- */}
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
        {/* Espaço reservado para alinhar com o ícone da lixeira */}
        <DivLixeira style={{ visibility: 'hidden' }} />
      </InputsContainer>

      {/* --- LOOP PARA AS LINHAS DE INPUTS (sem os títulos) --- */}
      {ranges.map((rangeItem, index) => (
        <InputsContainer key={rangeItem.id}>
          <InputWrapper>
            {/* O LabelInput foi removido daqui */}
            <StyledInput
              id={`prefixo-${rangeItem.id}`}
              type="text"
              placeholder="Ex: 81"
              value={rangeItem.prefixo}
              onChange={(e) => handleRangeChange(rangeItem.id, 'prefixo', e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              id={`rangeInicial-${rangeItem.id}`}
              type="text"
              placeholder="Ex: 1234"
              value={rangeItem.rangeInicial}
              onChange={(e) => handleRangeChange(rangeItem.id, 'rangeInicial', e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              id={`rangeFinal-${rangeItem.id}`}
              type="text"
              placeholder="Ex: 5678"
              value={rangeItem.rangeFinal}
              onChange={(e) => handleRangeChange(rangeItem.id, 'rangeFinal', e.target.value)}
            />
          </InputWrapper>

          {/* Lixeira visível apenas nas linhas extras */}
          {index > 0 ? (
            <DivLixeira style={{ alignSelf: 'flex-end', marginBottom: '1px' }}>
              <StyledTrashIcon onClick={() => handleRemoveRange(rangeItem.id)} />
            </DivLixeira>
          ) : (
            // Espaço reservado para manter o alinhamento na primeira linha
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
