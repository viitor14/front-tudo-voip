import { useState } from 'react';
import { Div, DivInput } from './styled';

export default function NovoNumero() {
  const [valor, setValor] = useState(1);

  const aumentarValor = () => {
    setValor((valorAnterior) => valorAnterior + 1);
  };

  const diminuirValor = () => {
    setValor((valorAnterior) => {
      if (valorAnterior > 0) {
        return valorAnterior - 1;
      }
      return 0;
    });
  };

  const handleInputChange = (event) => {
    const novoValor = parseInt(event.target.value, 10);

    setValor(isNaN(novoValor) ? 1 : novoValor);
  };
  return (
    <div>
      <Div>
        <p>Quantidade de Números</p>
        <DivInput>
          <button onClick={diminuirValor}>-</button>
          <input type="Number" value={valor} onChange={handleInputChange} />
          <button onClick={aumentarValor}>+</button>
        </DivInput>
      </Div>
    </div>
  );
}
