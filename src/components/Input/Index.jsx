import { InputWrapper, StyledInput, Icon } from './styled';

export default function InputWithIcon(props) {
  return (
    <InputWrapper>
      <StyledInput {...props} />
      <Icon size={20} />
    </InputWrapper>
  );
}
