import {
  DivInputsNumber,
  DivLixeira,
  InputsContainer,
  InputWrapper,
  LabelInput,
  StyledInput,
  StyledTrashIcon,
  ErrorMessage,
  AnexarButton,
  DivAnexo,
  DivMessageAnexo,
  RemoveAnexo
} from './styled';

import { BsTrash } from 'react-icons/bs';

const BlocoAnexo = ({ tipo, label, anexo, onAnexar, onRemover, onFileChange, inputRef, error }) => (
  <div style={{ marginTop: '15px' }}>
    <input
      type="file"
      ref={inputRef}
      onChange={onFileChange}
      style={{ display: 'none' }}
      accept=".pdf,.jpg,.jpeg,.png"
    />

    <AnexarButton type="button" onClick={onAnexar} hasError={!!error && !anexo}>
      {label}
    </AnexarButton>

    {anexo ? (
      <DivMessageAnexo>
        <span>Ficheiro: {anexo.name}</span>
        <RemoveAnexo type="button" onClick={onRemover}>
          <BsTrash size={20} />
        </RemoveAnexo>
      </DivMessageAnexo>
    ) : (
      error && <ErrorMessage>{error}</ErrorMessage>
    )}
  </div>
);

export default function NumeroRange({
  ranges,
  onAddRange,
  onRemoveRange,
  onRangeChange,
  errors,
  onBlur,
  anexos,
  onAnexarClick,
  onFileChange,
  onRemoverAnexo,
  inputRefs
}) {
  const anexosError = errors?.anexos;
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
                if (/^[0-9]*$/.test(valor) && valor.length <= 4) {
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
                if (/^[0-9]*$/.test(valor) && valor.length <= 5) {
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

      <DivAnexo>
        <BlocoAnexo
          tipo="termo_contrato"
          label="Anexar Termo"
          anexo={anexos.termo_contrato}
          onAnexar={() => onAnexarClick('termo_contrato')}
          onRemover={() => onRemoverAnexo('termo_contrato')}
          onFileChange={(e) => onFileChange('termo_contrato', e)}
          inputRef={(el) => (inputRefs.current.termo_contrato = el)}
          error={anexosError}
        />
        <BlocoAnexo
          tipo="foto_documento" // ALTERADO
          label="Anexar Foto do Documento"
          anexo={anexos.foto_documento} // ALTERADO
          onAnexar={() => onAnexarClick('foto_documento')} // ALTERADO
          onRemover={() => onRemoverAnexo('foto_documento')} // ALTERADO
          onFileChange={(e) => onFileChange('foto_documento', e)} // ALTERADO
          inputRef={(el) => (inputRefs.current.foto_documento = el)}
          error={anexosError}
        />
        <BlocoAnexo
          tipo="fatura"
          label="Anexar Fatura"
          anexo={anexos.fatura}
          onAnexar={() => onAnexarClick('fatura')}
          onRemover={() => onRemoverAnexo('fatura')}
          onFileChange={(e) => onFileChange('fatura', e)}
          inputRef={(el) => (inputRefs.current.fatura = el)}
          error={anexosError}
        />
      </DivAnexo>
    </DivInputsNumber>
  );
}
