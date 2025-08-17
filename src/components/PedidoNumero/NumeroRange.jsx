import { InputsContainer, InputWrapper, LabelInput, StyledInput } from './styled';

export default function NumeroRange({
  prefixo,
  rangeInicial,
  rangeFinal,
  setPrefixo,
  setRangeInicial,
  setRangeFinal
}) {
  <InputsContainer>
    <InputWrapper>
      <LabelInput htmlFor="prefixo">Prefixo</LabelInput>
      <StyledInput
        id="prefixo"
        type="text"
        placeholder="Ex: 81"
        value={prefixo}
        onChange={(e) => setPrefixo(e.target.value)}
      />
    </InputWrapper>
    <InputWrapper>
      <LabelInput htmlFor="rangeInicial">Range Inicial</LabelInput>
      <StyledInput
        id="rangeInicial"
        type="text"
        placeholder="Ex: 1234"
        value={rangeInicial}
        onChange={(e) => setRangeInicial(e.target.value)}
      />
    </InputWrapper>
    <InputWrapper>
      <LabelInput htmlFor="rangeFinal">Range Final</LabelInput>
      <StyledInput
        id="rangeFinal"
        type="text"
        placeholder="Ex: 5678"
        value={rangeFinal}
        onChange={(e) => setRangeFinal(e.target.value)}
      />
    </InputWrapper>
  </InputsContainer>;
}
