import { Container } from '../../styles/GlobalStyles';
import {
  DivTitle,
  Title,
  BoxInfoDashboard,
  DivFilter,
  Table,
  StatusSpan,
  EllipsisIcon,
  PaginationContainer,
  PaginationButton,
  ChevronLeftIcon,
  ChevronRightIcon
} from './styled';

import dados from './teste.json';

import { useState } from 'react';

import InfoDashboard from '../../components/InfoDashboard/Index';
import InputWithIcon from '../../components/Input/Index';
import Select from '../../components/select/Index';

export default function Home() {
  const [valueSelected, setValueSelected] = useState('Todos os Status');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calcula o índice inicial e final dos itens da página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dados.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(dados.length / itemsPerPage);

  // Função para mudar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <div>
        <Table>
          <thead>
            <tr>
              {colunas.map((coluna, index) => (
                <th key={index}>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((pedido) => (
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
        <PaginationContainer>
          <span>
            Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, dados.length)} de{' '}
            {dados.length} registros
          </span>
          <div className="pagination-buttons">
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}>
              <ChevronLeftIcon />
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}>
              <ChevronRightIcon />
            </PaginationButton>
          </div>
        </PaginationContainer>
      </div>
    </Container>
  );
}
