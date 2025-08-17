import { DivInputsNumber, LabelNumber, Labell, DivLixeira, StyledTrashIcon } from './styled';

import InputWithIcon from '../Input/Index';

export default function NumeroIndividual({ numbers, onNumberChange, onAddNumber, onRemoveNumber }) {
  return (
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
            onChange={(e) => onNumberChange(numberItem.id, e)}
          />
          {index > 0 && (
            <DivLixeira>
              <StyledTrashIcon onClick={() => onRemoveNumber(numberItem.id)} />
            </DivLixeira>
          )}
        </LabelNumber>
      ))}
      <button type="button" onClick={onAddNumber}>
        + Adicionar outro número
      </button>
    </DivInputsNumber>
  );
}
