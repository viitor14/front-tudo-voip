import { SelectWrapper, Selected, OptionsList, OptionItem, ArrowIcon } from './styled';
import { useState } from 'react';
export default function Select({ options, value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <SelectWrapper>
      <Selected onClick={() => setOpen(!open)}>
        {value || 'Selecione...'}
        <ArrowIcon open={open} />
      </Selected>
      {open && (
        <OptionsList>
          {options.map((opt) => (
            <OptionItem key={opt} onClick={() => handleSelect(opt)}>
              {opt}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
}
