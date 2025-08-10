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

  const [searchTerm, setSearchTerm] = useState('');
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

  const getFilteredData = () => {
    return dados.filter((item) => {
      // Filtro de texto (procura em cliente, cidade e cpf/cnpj)
      const searchFilter =
        searchTerm === '' ||
        item.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cpfCnpj.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtro de status
      const statusFilter = valueSelected === 'Todos os Status' || item.status === valueSelected;

      return searchFilter && statusFilter;
    });
  };

  const filteredData = getFilteredData();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Atualize o cálculo de páginas totais
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const getTotalPedidos = () => {
    return dados.length;
  };

  const getTotalByStatus = (status) => {
    return dados.filter((item) => item.status === status).length;
  };

  return (
    <Container>
      <DivTitle>
        <Title>Dashboard</Title>
        <button>Cadastrar Pedido</button>
      </DivTitle>

      <BoxInfoDashboard>
        <InfoDashboard title="Total de Números" number={getTotalPedidos()} />
        <InfoDashboard title="Ativos" number={getTotalByStatus('Ativo')} />
        <InfoDashboard title="Em Andamento" number={getTotalByStatus('Em Andamento')} />
        <InfoDashboard title="Recusados" number={getTotalByStatus('Recusado')} />
      </BoxInfoDashboard>
      <DivFilter>
        <InputWithIcon
          placeholder="Buscar por cliente, por cidade, por CPF/CNPJ..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
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
            Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} de{' '}
            {filteredData.length} registros
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
