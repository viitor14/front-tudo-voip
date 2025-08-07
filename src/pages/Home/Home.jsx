import { Container } from '../../styles/GlobalStyles';
import { DivTitle, Title } from './styled';

export default function Home() {
  return (
    <Container>
      <DivTitle>
        <Title>Dashboard</Title>
        <button>Cadastrar Pedido</button>
      </DivTitle>
    </Container>
  );
}
