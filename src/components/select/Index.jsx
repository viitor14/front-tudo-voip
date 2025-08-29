// src/components/Select/index.jsx

import { SelectWrapper, Selected, OptionsList, OptionItem, ArrowIcon } from './styled';

export default function Select({ options, value, onChange, isOpen, onToggle, ...rest }) {
  const handleSelect = (optionValue) => {
    onChange(optionValue);
    onToggle();
  };

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || value || 'Selecione...';

  return (
    <SelectWrapper {...rest}>
      <Selected onClick={onToggle} {...rest}>
        {selectedLabel}
        <ArrowIcon open={isOpen} />
      </Selected>

      {isOpen && (
        <OptionsList>
          {options.map((opt) => (
            <OptionItem key={opt.value} onClick={() => handleSelect(opt.value)}>
              {opt.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
}
