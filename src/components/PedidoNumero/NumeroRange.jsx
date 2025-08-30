import {
  DivInputsNumber,
  DivLixeira,
  InputsContainer,
  InputWrapper,
  LabelInput,
  StyledInput,
  StyledTrashIcon,
  ErrorMessage
} from './styled';

export default function NumeroRange({ ranges, onAddRange, onRemoveRange, onRangeChange, errors }) {
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
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Ex: 81"
              value={rangeItem.prefixo}
              onChange={(e) => {
                const valor = e.target.value;
                if (/^[0-9]*$/.test(valor) && valor.length <= 2) {
                  onRangeChange(rangeItem.id, 'prefixo', valor);
                }
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              id={`rangeInicial-${rangeItem.id}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Ex: 1234"
              value={rangeItem.rangeInicial}
              onChange={(e) => {
                const valor = e.target.value;
                if (/^[0-9]*$/.test(valor) && valor.length <= 5) {
                  onRangeChange(rangeItem.id, 'rangeInicial', valor);
                }
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              id={`rangeFinal-${rangeItem.id}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Ex: 5678"
              value={rangeItem.rangeFinal}
              onChange={(e) => {
                const valor = e.target.value;
                if (/^[0-9]*$/.test(valor) && valor.length <= 4) {
                  onRangeChange(rangeItem.id, 'rangeFinal', valor);
                }
              }}
            />
          </InputWrapper>

          {index > 0 && (
            <DivLixeira style={{ alignSelf: 'flex-end', marginBottom: '1px' }}>
              <StyledTrashIcon onClick={() => onRemoveRange(rangeItem.id)} />
            </DivLixeira>
          )}
        </InputsContainer>
      ))}
      {errors.numerosIndividuais && <ErrorMessage>{errors.numerosIndividuais}</ErrorMessage>}
      <button type="button" onClick={onAddRange}>
        + Adicionar outro range
      </button>
    </DivInputsNumber>
  );
}
