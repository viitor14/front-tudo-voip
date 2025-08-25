import { useState } from 'react';
import { Div, DivInput } from './styled';

export default function NovoNumero({ formData, onFormChange }) {
  const aumentarValor = () => {
    const valorAtual = Number(formData.quantidadeNumero) || 0;
    onFormChange('quantidadeNumero', valorAtual + 1);
  };

  const diminuirValor = () => {
    const valorAtual = Number(formData.quantidadeNumero) || 0;
    if (valorAtual > 1) {
      onFormChange('quantidadeNumero', valorAtual - 1);
    }
  };

  const handleInputChange = (event) => {
    const novoValor = parseInt(event.target.value, 10);
    onFormChange('quantidadeNumero', isNaN(novoValor) || novoValor < 1 ? 1 : novoValor);
  };
  return (
    <div>
      <Div>
        <p>Quantidade de Números</p>
        <DivInput>
          <button onClick={diminuirValor}>-</button>
          <input
            type="Number"
            value={formData.quantidadeNumero}
            onChange={handleInputChange}
            min="1"
          />
          <button onClick={aumentarValor}>+</button>
        </DivInput>
      </Div>
    </div>
  );
}
