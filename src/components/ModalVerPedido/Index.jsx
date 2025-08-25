// Ficheiro: src/components/ModalVerPedido/index.jsx
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalHeader,
  ModalBody,
  DetailSection,
  DetailItem
} from './styled'; // Crie estes estilos no seu ficheiro styled.js

// Função auxiliar para formatar texto
const formatarTexto = (texto) => {
  if (!texto) return '';
  const textoEmMinusculo = texto.toLowerCase();
  return textoEmMinusculo.charAt(0).toUpperCase() + textoEmMinusculo.slice(1);
};

export default function ModalVerPedido({ pedido, onClose }) {
  if (!pedido) return null;

  console.log(pedido);

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
              <strong>Status:</strong> {formatarTexto(pedido.status_pedido)}
            </DetailItem>
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
          </DetailSection>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}
