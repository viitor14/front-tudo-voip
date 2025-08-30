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
  onBlur
}) {
  return (
    <DivInputsNumber>
      <Labell>
        <p>Números</p>
      </Labell>
      {numbers.map((numberItem, index) => {
        // 1. Define o nome único para este campo
        const fieldName = `numero_${numberItem.id}`;
        // 2. Pega a mensagem de erro específica para este campo
        const fieldError = errors?.numerosIndividuais?.[fieldName];

        return (
          // Use um container extra ou um Fragment se precisar agrupar o input e o erro
          <div key={numberItem.id}>
            <LabelNumber>
              <InputWithIcon
                name={fieldName} // 3. Usa o nome único
                placeholder="11999999999"
                width="100%"
                value={numberItem.value}
                onChange={(e) => onNumberChange(numberItem.id, e)}
                onBlur={onBlur}
                hasError={!!fieldError} // 4. O erro agora é individual
              />
              {index > 0 && (
                <DivLixeira>
                  <StyledTrashIcon onClick={() => onRemoveNumber(numberItem.id)} />
                </DivLixeira>
              )}
            </LabelNumber>
            {/* 5. A mensagem de erro agora aparece embaixo do seu respectivo input */}
            {fieldError && <ErrorMessage>{fieldError}</ErrorMessage>}
          </div>
        );
      })}

      {/* Opcional: Você ainda pode ter um erro geral para a lista, se a validação do botão "Avançar" o gerar */}
      {typeof errors.numerosIndividuais === 'string' && (
        <ErrorMessage>{errors.numerosIndividuais}</ErrorMessage>
      )}

      <button type="button" onClick={onAddNumber}>
        + Adicionar outro número
      </button>
    </DivInputsNumber>
  );
}
