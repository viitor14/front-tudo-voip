import { SelectWrapper, Selected, OptionsList, OptionItem } from './styled';
import React, { useState } from 'react';
export default function Select({ options, value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <SelectWrapper>
      <Selected onClick={() => setOpen(!open)}>{value || 'Selecione...'}</Selected>
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
