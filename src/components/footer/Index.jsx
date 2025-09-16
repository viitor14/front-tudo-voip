import {
  FooterContainer,
  DivContainer,
  DivText,
  IconHeadset,
  IconTrademark,
  IconWhatsapp
} from './styled';

export default function Footer() {
  return (
    <FooterContainer>
      <DivContainer>
        <IconHeadset size={40} />
        <DivText>
          <p>Horario de atendimento</p>
          <p>Seg. à Sáb. Das 8h as 18h</p>
        </DivText>
      </DivContainer>

      <DivContainer>
        <IconTrademark size={40} />
        <DivText>
          <p>Copyright @ 2014 - 2025 Tudo Voip.</p>
          <p>Todos os direitos reservados.</p>
        </DivText>
      </DivContainer>

      <DivContainer>
        <IconWhatsapp size={40} />
        <DivText>
          <p>Para abertura de chamados técnicos:</p>
          <p>81 99364-1925</p>
        </DivText>
      </DivContainer>
    </FooterContainer>
  );
}
