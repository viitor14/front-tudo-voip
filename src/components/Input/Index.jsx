import { InputWrapper, StyledInput, Icon } from './styled';

export default function InputWithIcon({
  customStyle,
  iconSize = 20,
  showIcon = false,
  iconColor,
  wrapperStyle,
  ...props
}) {
  return (
    <InputWrapper style={wrapperStyle}>
      <StyledInput style={customStyle} {...props} />
      {showIcon && <Icon size={iconSize} color={iconColor} />}
    </InputWrapper>
  );
}
