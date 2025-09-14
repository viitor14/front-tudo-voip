import { useState } from 'react';

import { DivPedidoNumero, DivInputRadio, InputRadio } from './styled';

import NumeroIndividual from './NumeroIndividual';
import NumeroRange from './NumeroRange';

export default function PedidoNumero({
  dados,
  onFormChange,
  errors,
  onBlur,
  anexos,
  onAnexarClick,
  onFileChange,
  onRemoverAnexo,
  inputRefs
}) {
  const handleModoChange = (event) => {
    onFormChange('modo', event.target.value);
  };

  const handleAddNumber = () => {
    const novosNumeros = [...dados.numerosIndividuais, { id: Date.now(), value: '' }];
    onFormChange('numerosIndividuais', novosNumeros);
  };

  const handleRemoveNumber = (idToRemove) => {
    if (dados.numerosIndividuais.length > 1) {
      const novosNumeros = dados.numerosIndividuais.filter((number) => number.id !== idToRemove);
      onFormChange('numerosIndividuais', novosNumeros);
    }
  };

  const handleNumberChange = (id, event) => {
    const newValue = event.target.value;
    const regexNumber = /^[0-9]*$/; // O asterisco '*' permite a string vazia

    if (!regexNumber.test(newValue)) {
      // Se o valor não for um número (ou for algo como "123a"),
      // a função simplesmente para e não atualiza o estado.
      console.log('Entrada inválida. Digite apenas números.');
      return;
    }
    const novosNumeros = dados.numerosIndividuais.map((numero) => {
      if (numero.id === id) {
        // Retorna o objeto atualizado com o novo valor
        return { ...numero, value: newValue };
      }
      return numero;
    });
    // 3. Atualize o estado apenas com os valores válidos
    onFormChange('numerosIndividuais', novosNumeros);
  };

  const handleAddRange = () => {
    const novosRanges = [
      ...dados.ranges,
      { id: Date.now(), prefixo: '', rangeInicial: '', rangeFinal: '' }
    ];
    onFormChange('ranges', novosRanges);
  };

  const handleRemoveRange = (idToRemove) => {
    if (dados.ranges.length > 1) {
      const novosRanges = dados.ranges.filter((range) => range.id !== idToRemove);
      onFormChange('ranges', novosRanges);
    }
  };

  const handleRangeChange = (id, field, value) => {
    const novosRanges = dados.ranges.map((range) => {
      if (range.id === id) {
        return { ...range, [field]: value };
      }
      return range;
    });
    onFormChange('ranges', novosRanges);
  };

  return (
    <DivPedidoNumero>
      <DivInputRadio>
        <InputRadio>
          <input
            type="radio"
            id="individual"
            value="individual"
            name="tipoNumero"
            // 4. Lê o valor de 'dados.modo' vindo do pai
            checked={dados.modo === 'individual'}
            onChange={handleModoChange}
          />
          <label htmlFor="individual">Adicionar Individualmente</label>
        </InputRadio>
        <InputRadio>
          <input
            type="radio"
            id="range"
            name="tipoNumero"
            value="range"
            checked={dados.modo === 'range'}
            onChange={handleModoChange}
          />
          <label htmlFor="range">Em faixa (Range)</label>
        </InputRadio>
      </DivInputRadio>

      {dados.modo === 'individual' ? (
        <NumeroIndividual
          // 5. Passa os dados e funções corretos para o componente filho
          numbers={dados.numerosIndividuais}
          onNumberChange={handleNumberChange}
          onAddNumber={handleAddNumber}
          onRemoveNumber={handleRemoveNumber}
          errors={errors}
          onBlur={onBlur}
          anexos={anexos}
          onAnexarClick={onAnexarClick}
          onFileChange={onFileChange}
          onRemoverAnexo={onRemoverAnexo}
          inputRefs={inputRefs}
        />
      ) : (
        <NumeroRange
          ranges={dados.ranges}
          onAddRange={handleAddRange}
          onRemoveRange={handleRemoveRange}
          onRangeChange={handleRangeChange}
          errors={errors}
        /> // Este já se gerencia sozinho, como definimos antes
      )}
    </DivPedidoNumero>
  );
}
