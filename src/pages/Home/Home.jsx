import { Container } from '../../styles/GlobalStyles';
import { DivTitle, Title, BoxInfoDashboard, DivFilter } from './styled';

import { useState } from 'react';

import InfoDashboard from '../../components/InfoDashboard/Index';
import InputWithIcon from '../../components/Input/Index';
import Select from '../../components/select/Index';

export default function Home() {
  const [valueSelected, setValueSelected] = useState('Todos os Status');
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
      <DivFilter>
        <InputWithIcon placeholder="Buscar por cliente, por cidade, por CPF/CNPJ..." />
        <Select
          options={['Todos os Status', 'Ativo', 'Em Andamento', 'Recusado']}
          onChange={(value) => setValueSelected(value)}
          value={valueSelected}
        />
      </DivFilter>
    </Container>
  );
}
