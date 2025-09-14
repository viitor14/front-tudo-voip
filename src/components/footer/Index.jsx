import { FooterContainer, DivContainer, DivText } from './styled';

export default function Footer() {
  return (
    <FooterContainer>
      <DivContainer>
        <div>img</div>
        <DivText>
          <p>Horario de atendimento</p>
          <p>Seg. à Sáb. Das 8h as 18h</p>
        </DivText>
      </DivContainer>

      <DivContainer>
        <div>img</div>
        <DivText>
          <p>Copyright @ 2014 - 2025 Tudo Voip.</p>
          <p>Todos os direitos reservados.</p>
        </DivText>
      </DivContainer>

      <DivContainer>
        <div>img</div>
        <DivText>
          <p>Para abertura de chamados técnicos:</p>
          <p>contato@tudovoip.com.br</p>
        </DivText>
      </DivContainer>
    </FooterContainer>
  );
}
