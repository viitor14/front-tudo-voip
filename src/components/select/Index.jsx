import { SelectWrapper, Selected, OptionsList, OptionItem, ArrowIcon } from './styled';
import { useState, useEffect } from 'react';
export default function Select({
  options,
  value,
  onChange,
  height,
  marginTop,
  width,
  isOpen,
  onOpen
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    if (!open) {
      onOpen(); // Notifica o componente pai
    } else {
      setOpen(false); // Fecha o select atual
    }
  };

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <SelectWrapper width={width}>
      <Selected height={height} onClick={handleClick}>
        {value || 'Selecione...'}
        <ArrowIcon open={open} />
      </Selected>
      {open && (
        <OptionsList marginTop={marginTop}>
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
