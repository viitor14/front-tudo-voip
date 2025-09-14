import {
  DivInputsNumber,
  LabelNumber,
  Labell,
  DivLixeira,
  StyledTrashIcon,
  ErrorMessage,
  AnexarButton,
  DivAnexo,
  DivMessageAnexo,
  RemoveAnexo
} from './styled';

import { BsTrash } from 'react-icons/bs';

import InputWithIcon from '../Input/Index';

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

export default function NumeroIndividual({
  numbers = [],
  onNumberChange,
  onAddNumber,
  onRemoveNumber,
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
      <Labell>
        <p>Números</p>
      </Labell>
      {numbers.map((numberItem, index) => {
        const fieldName = `numero_${numberItem.id}`;
        const fieldError = errors?.numerosIndividuais?.[fieldName];

        return (
          <div key={numberItem.id}>
            <LabelNumber>
              <InputWithIcon
                name={fieldName}
                placeholder="11999999999"
                width="100%"
                value={numberItem.value}
                onChange={(e) => onNumberChange(numberItem.id, e)}
                onBlur={onBlur}
                hasError={!!fieldError}
              />
              {index > 0 && (
                <DivLixeira>
                  <StyledTrashIcon onClick={() => onRemoveNumber(numberItem.id)} />
                </DivLixeira>
              )}
            </LabelNumber>
            {fieldError && <ErrorMessage>{fieldError}</ErrorMessage>}
          </div>
        );
      })}

      {typeof errors.numerosIndividuais === 'string' && (
        <ErrorMessage>{errors.numerosIndividuais}</ErrorMessage>
      )}

      <button type="button" onClick={onAddNumber}>
        + Adicionar outro número
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
      {/* ======================================================================= */}
    </DivInputsNumber>
  );
}
