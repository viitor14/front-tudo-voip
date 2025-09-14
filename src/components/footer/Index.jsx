import {
  FooterContainer,
  DivContainer,
  DivText,
  IconHeadset,
  IconTrademark,
  IconMail
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
        <IconMail size={40} />
        <DivText>
          <p>Para abertura de chamados técnicos:</p>
          <p>contato@tudovoip.com.br</p>
        </DivText>
      </DivContainer>
    </FooterContainer>
  );
}
