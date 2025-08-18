import {
  DivGeral,
  DivResumoPedido,
  DivInfo,
  DivCliente,
  DivInfoCliente,
  DivOberservacoes,
  TextArea,
  DivTermo
} from './styled';

export default function ResumoPedido({ formData, onFormChange }) {
  let numerosParaExibir = '';

  if (formData.tipoVenda === 'Portabilidade') {
    // Se for portabilidade, verificamos o MODO de inserção
    if (formData.modo === 'individual' && formData.numerosIndividuais) {
      // Lógica que você já tinha para números individuais
      numerosParaExibir = formData.numerosIndividuais
        .map((numero) => numero.value)
        .filter(Boolean)
        .join(', ');
    } else if (formData.modo === 'range' && formData.ranges) {
      // LÓGICA NOVA para formatar e exibir os RANGES
      numerosParaExibir = formData.ranges
        .filter((r) => r.prefixo && r.rangeInicial && r.rangeFinal) // Filtra ranges incompletos
        .map((r) => `${r.prefixo} ${r.rangeInicial}-${r.rangeFinal}`) // Formata cada range
        .join(', '); // Junta os ranges com vírgula
    }
  }

  return (
    <DivGeral>
      <DivResumoPedido>
        <p>Resumo Pedido</p>
        <DivInfo>
          <DivCliente>
            <p>Cliente</p>
            <DivInfoCliente>
              <p>{formData.nomeCompleto}</p>
              <p>{formData.cpfCnpj}</p>
            </DivInfoCliente>
            {/**
             * adicionar depois
            <button>Editar</button>
             */}
          </DivCliente>

          <hr />

          <DivCliente>
            <p>Detalhes do Pedido</p>
            <DivInfoCliente>
              <p>
                Tipo: <span>{formData.tipoVenda}</span>
              </p>
              {formData.tipoVenda === 'Novo Numero' && (
                <p>
                  Quantidade: <span>{formData.quantidadeNumero}</span>
                </p>
              )}

              {formData.tipoVenda === 'Portabilidade' && (
                <p>
                  Números: <span>{numerosParaExibir || 'Nenhum número informado'}</span>
                </p>
              )}
              <p>
                Documento: <span>{formData.documento || 'Nenhum documento anexado'}</span>
              </p>
            </DivInfoCliente>
            {/**
             * adicionar depois
            <button>Editar</button>
             */}
          </DivCliente>
        </DivInfo>
      </DivResumoPedido>
      <DivOberservacoes>
        <span>Observações</span>
        <TextArea
          placeholder="Adicione qualquer informação relevante aqui..."
          value={formData.observacoes}
          onChange={(e) => onFormChange('observacoes', e.target.value)}></TextArea>
      </DivOberservacoes>

      <DivTermo>
        <input type="checkbox" name="termos" id="termos" />
        <label htmlFor="termos">Eu declaro que li e aceito os Termos e condições do pedido</label>
      </DivTermo>
    </DivGeral>
  );
}
