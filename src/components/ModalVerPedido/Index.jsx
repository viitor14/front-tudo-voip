import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalHeader,
  ModalBody,
  DetailSection,
  DetailItem,
  DownloadLink,
  SaveChangesButton
} from './styled';

import Select from '../select/Index';

// Função auxiliar para formatar texto
const formatarTexto = (texto) => {
  if (!texto) return '';
  const textoEmMinusculo = texto.toLowerCase();
  return textoEmMinusculo.charAt(0).toUpperCase() + textoEmMinusculo.slice(1);
};

export default function ModalVerPedido({ pedido, onClose, onUpdate }) {
  // Pega o status de admin do estado do Redux
  const isAdmin = useSelector((state) => state.auth.user?.admin);
  const [statusSelecionado, setStatusSelecionado] = useState(pedido.status_pedido);
  const [isLoading, setIsLoading] = useState(false);
  const [motivoCancelamento, setMotivoCancelamento] = useState(pedido.motivo_cancelamento || '');

  const [isStatusSelectOpen, setIsStatusSelectOpen] = useState(false); // Estado para controlar o Select de status
  const [isMotivoSelectOpen, setIsMotivoSelectOpen] = useState(false); // Estado para controlar o Select de motivo

  const motivosCancelamentoOptions = [
    { value: 'NÚMERO VAGO', label: 'Número Vago' },
    { value: 'CPF DIVERGENTE', label: 'Cpf Divergente' },
    { value: 'CNPJ DIVERGENTE', label: 'Cnpj Divergente' },
    { value: 'LOCALIDADE NÃO ATENDIDA', label: 'Localidade não encontrada' }
  ];

  // PASSO 2: Crie a função que vai abrir/fechar o Select
  const handleToggleStatusSelect = () => setIsStatusSelectOpen(!isStatusSelectOpen); // Toggle para o Select de status
  const handleToggleMotivoSelect = () => setIsMotivoSelectOpen(!isMotivoSelectOpen); // Toggle para o Select de motivo

  if (!pedido) return null;

  const API_URL = 'http://localhost:3002'; //Criar um .env

  // IMPORTANTE: Seu componente Select espera um array de objetos.
  // Vamos ajustar o formato das opções.
  const statusOptions = [
    { value: 'CONCLUÍDO', label: 'Concluído' },
    { value: 'EM ANDAMENTO', label: 'Em Andamento' },
    { value: 'RECUSADO', label: 'Recusado' }
  ];

  const handleStatusChange = async () => {
    if (statusSelecionado === 'RECUSADO' && !motivoCancelamento) {
      toast.error('É obrigatório selecionar um motivo para recusar o pedido.');
      return; // Para a execução
    }

    setIsLoading(true);

    try {
      const dadosParaAtualizar = {
        status_pedido: statusSelecionado,
        // Se o status for RECUSADO, envia o motivo. Senão, envia null para limpar o campo.
        motivo_cancelamento: statusSelecionado === 'RECUSADO' ? motivoCancelamento : null
      };

      await axios.put(`/pedido/${pedido.cod_pedido}`, dadosParaAtualizar);
      toast.success('Status do pedido atualizado com sucesso!');
      onUpdate(); // Chama a função para atualizar o dashboard
      onClose(); // Fecha o modal
    } catch (error) {
      toast.error('Erro ao atualizar o status do pedido.');
    } finally {
      setIsLoading(false);
    }
  };
  // Verifica se o status foi alterado para mostrar o botão de salvar
  const statusFoiAlterado = statusSelecionado !== pedido.status_pedido;
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Detalhes do Pedido #{pedido.cod_pedido}</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <DetailSection>
            <h3>Resumo</h3>
            <DetailItem>
              <strong>Status:</strong>
              {isAdmin ? (
                <Select
                  options={statusOptions}
                  onChange={(valor) => setStatusSelecionado(valor)}
                  value={statusSelecionado}
                  width="200px"
                  height="36px"
                  isOpen={isStatusSelectOpen}
                  onToggle={handleToggleStatusSelect}
                />
              ) : (
                <span>{formatarTexto(pedido.status_pedido)}</span>
              )}
            </DetailItem>
            {statusSelecionado === 'RECUSADO' && (
              <DetailItem>
                <strong>Motivo do Cancelamento:</strong>
                {isAdmin ? (
                  <Select
                    options={motivosCancelamentoOptions}
                    onChange={(valor) => setMotivoCancelamento(valor)}
                    value={motivoCancelamento}
                    isOpen={isMotivoSelectOpen}
                    onToggle={handleToggleMotivoSelect}
                    placeholder="Selecione um motivo..."
                    width="100%"
                    height="36px"
                  />
                ) : (
                  <span>{formatarTexto(pedido.motivo_cancelamento)}</span>
                )}
              </DetailItem>
            )}
            <DetailItem>
              <strong>Data do Pedido:</strong>
              {pedido.data_pedido ? new Date(pedido.data_pedido).toLocaleDateString('pt-BR') : '-'}
            </DetailItem>
            <DetailItem>
              <strong>Tipo de Venda:</strong> {pedido.tipo_venda?.tipo_venda}
            </DetailItem>
          </DetailSection>

          <DetailSection>
            <h3>Destinatário</h3>
            <DetailItem>
              <strong>Nome:</strong> {pedido.nome_completo || pedido.nome_empresa}
            </DetailItem>
            <DetailItem>
              <strong>Documento:</strong> {pedido.cpf || pedido.cnpj}
            </DetailItem>
          </DetailSection>

          <DetailSection>
            <h3>Localização</h3>
            <DetailItem>
              <strong>Cidade:</strong> {pedido.cidade?.nome_cidade}
            </DetailItem>
            <DetailItem>
              <strong>Estado:</strong> {pedido.estado?.nome_estado}
            </DetailItem>
            <DetailItem>
              <strong>DDD:</strong> {pedido.zona_telefonica?.area_telefonica}
            </DetailItem>
          </DetailSection>

          <DetailSection>
            <h3>Detalhes Adicionais</h3>
            {pedido.tipo_venda?.tipo_venda === 'PORTABILIDADE' ? (
              <DetailItem>
                <strong>Número Portabilidade:</strong>
                <span>
                  {pedido.portabilidade?.telefone
                    ? pedido.portabilidade.telefone
                    : 'Nenhum número informado'}
                </span>
              </DetailItem>
            ) : (
              <DetailItem>
                <strong>Qtd. Novos Números:</strong>
                <span>{pedido.quantidade_novos_numeros || 'N/A'}</span>
              </DetailItem>
            )}
            <DetailItem>
              <strong>Observações:</strong> {pedido.observacoes || 'Nenhuma'}
            </DetailItem>

            <DetailSection>
              <h3>Termos de Contrato</h3>
              <DetailItem>
                {pedido.termos_contrato && pedido.termos_contrato.length > 0 ? (
                  <ul>
                    {pedido.termos_contrato.map((termo) => (
                      <li key={termo.cod_termo_contrato}>
                        <DownloadLink
                          href={`${API_URL}/termos/${termo.caminho_arquivo}`}
                          download={termo.nome_arquivo}
                          target="_blank"
                          rel="noopener noreferrer">
                          {termo.nome_arquivo}
                        </DownloadLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>Nenhum termo anexado.</span>
                )}
              </DetailItem>
            </DetailSection>
            <DetailSection>
              <h3>Foto Documento</h3>
              <DetailItem>
                {pedido.fotos_documento && pedido.fotos_documento.length > 0 ? (
                  <ul>
                    {pedido.fotos_documento.map((foto) => (
                      <li key={foto.cod_foto_documento}>
                        <DownloadLink
                          href={`${API_URL}/fotos/${foto.caminho_arquivo}`}
                          download={foto.nome_arquivo}
                          target="_blank"
                          rel="noopener noreferrer">
                          {foto.nome_arquivo}
                        </DownloadLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>Nenhuma foto de documento anexada.</span>
                )}
              </DetailItem>
            </DetailSection>
            <DetailSection>
              <h3>Fatura</h3>
              <DetailItem>
                {pedido.faturas && pedido.faturas.length > 0 ? (
                  <ul>
                    {pedido.faturas.map((fatura) => (
                      <li key={fatura.cod_fatura}>
                        <DownloadLink
                          href={`${API_URL}/faturas/${fatura.caminho_arquivo}`}
                          download={fatura.nome_arquivo}
                          target="_blank"
                          rel="noopener noreferrer">
                          {fatura.nome_arquivo}
                        </DownloadLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>Nenhuma foto de documento anexada.</span>
                )}
              </DetailItem>
            </DetailSection>
          </DetailSection>
          {isAdmin && statusFoiAlterado && (
            <SaveChangesButton onClick={handleStatusChange} disabled={isLoading}>
              {isLoading ? 'A guardar...' : 'Guardar Alterações'}
            </SaveChangesButton>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}
