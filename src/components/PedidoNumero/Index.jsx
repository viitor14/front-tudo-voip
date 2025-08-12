import {
  DivPedidoNumero,
  DivInputRadio,
  InputRadio,
  DivInputsNumber,
  DivLixeira,
  LabelNumber,
  Labell
} from './styled';

import InputWithIcon from '../Input/Index';

export default function PedidoNumero({ display }) {
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
        <LabelNumber>
          <Labell>
            <p>Números</p>
            <InputWithIcon placeholder="00.000.000/0000-00" width="100%" />
          </Labell>
          <DivLixeira>
            <div>X</div>
          </DivLixeira>
        </LabelNumber>
      </DivInputsNumber>
    </DivPedidoNumero>
  );
}
