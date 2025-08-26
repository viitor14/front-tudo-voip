import { SelectWrapper, Selected, OptionsList, OptionItem, ArrowIcon } from './styled';
import { useState } from 'react';
export default function Select({
  options,
  value,
  onChange,
  height,
  marginTop,
  width,
  isOpen,
  onToggle
}) {
  const [open, setOpen] = useState(false);
  const handleSelect = (optionValue) => {
    onChange(optionValue); // 1. Avisa o pai que o valor mudou
    onToggle(); // 2. Avisa o pai para fechar o select
  };
  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || value || 'Selecione...';
  return (
    <SelectWrapper width={width}>
      <Selected height={height} onClick={onToggle}>
        {value || 'Selecione...'}
        <ArrowIcon open={isOpen} />
      </Selected>
      {isOpen && (
        <OptionsList marginTop={marginTop}>
          {/* 2. ATUALIZE O MAP PARA USAR OS OBJETOS */}
          {options.map((opt) => (
            <OptionItem
              key={opt.value} // Use o 'value' como chave, que é único
              onClick={() => handleSelect(opt.value)} // Passe apenas o 'value' para a função
            >
              {/* Mostre o 'label' para o usuário */}
              {opt.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
}
