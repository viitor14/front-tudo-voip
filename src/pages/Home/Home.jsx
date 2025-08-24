import { useEffect, useState } from 'react';
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

import axios from '../../services/axios';

import dados from './teste.json';

import InfoDashboard from '../../components/InfoDashboard/Index';
import InputWithIcon from '../../components/Input/Index';
import Select from '../../components/select/Index';
import CadastroPedido from '../../components/NewPedido/Index';

export default function Home() {
  const [pedidos, setPedidos] = useState([]);
  const [openSelectId, setOpenSelectId] = useState(null);
  const [showCadastro, setShowCadastro] = useState(false);
  const [valueSelected, setValueSelected] = useState('Todos os Status');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calcula o índice inicial e final dos itens da página atual
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/pedido');
      setPedidos(response.data);
    }

    getData();
  }, []);

  const formatarTexto = (texto) => {
    if (!texto) return ''; // Retorna uma string vazia se o texto for nulo
    const textoEmMinusculo = texto.toLowerCase();
    return textoEmMinusculo.charAt(0).toUpperCase() + textoEmMinusculo.slice(1);
  };

  const handleSelectOpen = (selectId) => {
    setOpenSelectId(selectId);
  };

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

  //CONSULTA DE PESQUISA (CASO PRECISE ADICIONAR NOVA COLUNA SÓ MUDAR A COLUNA)
  const getFilteredData = () => {
    return pedidos.filter((item) => {
      const searchFilter =
        searchTerm === '' ||
        (item.nome_completo &&
          item.nome_completo.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.nome_empresa && item.nome_empresa.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.cidade?.nome_cidade &&
          item.cidade.nome_cidade.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.tipo_venda?.tipo_venda &&
          item.tipo_venda.tipo_venda.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.cpf && item.cpf.includes(searchTerm)) ||
        (item.cnpj && item.cnpj.includes(searchTerm));

      const statusFilter =
        valueSelected === 'Todos os Status' || item.status_pedido === valueSelected;

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
    return pedidos.length;
  };

  //TOTAL DE PEDIDOS DE ACORDO COM O STATUS
  const getTotalByStatus = (status) => {
    return pedidos.filter((item) => item.status_pedido === status).length;
  };

  console.log(pedidos);
  return (
    <Container>
      {showCadastro && <CadastroPedido onClose={() => setShowCadastro(false)} />}
      <DivTitle>
        <Title>Dashboard</Title>
        <button onClick={() => setShowCadastro(true)}>Cadastrar Pedido</button>
      </DivTitle>

      <BoxInfoDashboard>
        <InfoDashboard title="Total de Números" number={getTotalPedidos()} />
        <InfoDashboard title="Ativos" number={getTotalByStatus('CONCLUÍDO')} />
        <InfoDashboard title="Em Andamento" number={getTotalByStatus('EM ANDAMENTO')} />
        <InfoDashboard title="Recusados" number={getTotalByStatus('RECUSADO')} />
      </BoxInfoDashboard>
      <DivFilter>
        <InputWithIcon
          placeholder="Buscar por cliente, por cidade, por CPF/CNPJ..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          showIcon={true}
          padding="10px 40px 10px 60px"
        />
        <Select
          options={['Todos os Status', 'Ativo', 'Em Andamento', 'Recusado']}
          onChange={(value) => setValueSelected(value)}
          value={valueSelected}
          isOpen={openSelectId === 'status'}
          onOpen={() => handleSelectOpen('status')}
          width="200px" // Você pode ajustar a largura conforme necessário
          height="44px"
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
              <tr key={pedido.cod_pedido}>
                <td>{pedido.cod_pedido}</td>
                <td>
                  {pedido.data_pedido
                    ? new Date(pedido.data_pedido).toLocaleDateString('pt-BR')
                    : '-'}
                </td>
                <td>{formatarTexto(pedido.tipo_venda?.tipo_venda)}</td>
                <td>{pedido.zona_telefonica?.area_telefonica}</td>
                <td>{pedido.nome_completo || pedido.nome_empresa}</td>
                <td>{pedido.cpf || pedido.cnpj}</td>
                <td>{pedido.cidade?.nome_cidade}</td>
                <td className="textStatus">
                  <StatusSpan status={pedido.status_pedido}>{pedido.status_pedido}</StatusSpan>
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
