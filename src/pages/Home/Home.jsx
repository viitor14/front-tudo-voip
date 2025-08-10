import { Container } from '../../styles/GlobalStyles';
import {
  DivTitle,
  Title,
  BoxInfoDashboard,
  DivFilter,
  Table,
  StatusSpan,
  EllipsisIcon
} from './styled';

import dados from './teste.json';

import { useState } from 'react';

import InfoDashboard from '../../components/InfoDashboard/Index';
import InputWithIcon from '../../components/Input/Index';
import Select from '../../components/select/Index';

export default function Home() {
  const [valueSelected, setValueSelected] = useState('Todos os Status');

  const colunas = [
    'Pedido',
    'Data',
    'Tipo',
    'CN',
    'Cliente',
    'CPF/CNPJ',
    'Cidade',
    'Status',
    'Ações'
  ];

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
      <Table>
        <thead>
          <tr>
            {colunas.map((coluna, index) => (
              <th key={index}>{coluna}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.data}</td>
              <td>{pedido.tipo}</td>
              <td>{pedido.cn}</td>
              <td>{pedido.cliente}</td>
              <td>{pedido.cpfCnpj}</td>
              <td>{pedido.cidade}</td>
              <td className="textStatus">
                <StatusSpan status={pedido.status}>{pedido.status}</StatusSpan>
              </td>
              <td>
                <EllipsisIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
