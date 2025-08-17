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

export default function ResumoPedido() {
  return (
    <DivGeral>
      {/*div geral */}
      <DivResumoPedido>
        <p>Resumo Pedido</p>
        <DivInfo>
          <DivCliente>
            <p>Cliente</p>
            <DivInfoCliente>
              <p>nome do cliente</p>
              <p>cpf/cnpj</p>
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
                Tipo: <span>Novo Número</span>
              </p>
              <p>
                Quantidade: <span>1</span>
              </p>
              <p>
                Documento: <span>doc.pdf</span>
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
          name=""
          id=""
          placeholder="Adicione qualquer informação relevante aqui..."></TextArea>
      </DivOberservacoes>

      <DivTermo>
        <input type="checkbox" name="termos" id="termos" />
        <label htmlFor="termos">Eu declaro que li e aceito os Termos e condições do pedido</label>
      </DivTermo>
    </DivGeral>
  );
}
