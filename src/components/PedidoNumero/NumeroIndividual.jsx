import { useRef } from 'react'; // NOVO: Importe o useRef
import {
  DivInputsNumber,
  LabelNumber,
  Labell,
  DivLixeira,
  StyledTrashIcon,
  ErrorMessage
} from './styled';

import InputWithIcon from '../Input/Index';

export default function NumeroIndividual({
  numbers = [],
  onNumberChange,
  onAddNumber,
  onRemoveNumber,
  errors,
  onBlur,
  // NOVO: Props para o anexo de termo
  termoAnexado,
  onAnexarClick,
  onFileChange,
  onRemoverAnexo,
  termoInputRef // NOVO: A referência para o input
}) {
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

      {/* ======================= LÓGICA DO ANEXO INTEGRADA ======================= */}

      {/* NOVO: Input de ficheiro escondido, que faz o trabalho pesado */}
      <input
        type="file"
        ref={termoInputRef}
        onChange={onFileChange}
        style={{ display: 'none' }}
        accept=".pdf,.jpg,.jpeg,.png"
      />

      {/* NOVO: O seu botão agora tem uma função */}
      <button type="button" onClick={onAnexarClick}>
        Anexar Termo
      </button>

      {/* NOVO: Feedback visual para o utilizador saber qual ficheiro foi selecionado */}
      {termoAnexado && (
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          <span>Ficheiro: {termoAnexado.name}</span>
          <button
            type="button"
            onClick={onRemoverAnexo}
            style={{
              marginLeft: '10px',
              color: 'red',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer'
            }}>
            Remover
          </button>
        </div>
      )}
      {/* ======================================================================= */}
    </DivInputsNumber>
  );
}
