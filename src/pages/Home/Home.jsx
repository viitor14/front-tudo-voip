import { Container } from '../../styles/GlobalStyles';
import { DivTitle, Title, BoxInfoDashboard } from './styled';

import InfoDashboard from '../../components/InfoDashboard/Index';
import InputWithIcon from '../../components/Input/Index';

export default function Home() {
  return (
    <Container>
      <DivTitle>
        <Title>Dashboard</Title>
        <button>Cadastrar Pedido</button>
      </DivTitle>

      <BoxInfoDashboard>
        <InfoDashboard title="Total de Números" number={128} />
        <InfoDashboard title="Ativos" number={4} />
        <InfoDashboard title="Em Andamento" number={2} />
        <InfoDashboard title="Recusados" number={1} />
      </BoxInfoDashboard>
      <InputWithIcon placeholder="Buscar por cliente, por cidade, por CPF/CNPJ..." />
    </Container>
  );
}
