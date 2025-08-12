import { DivPedidoNumero } from './styled';

export default function PedidoNumero({ display }) {
  return (
    <DivPedidoNumero style={{ display: display || 'flex' }}>
      <h1>Pedido Número Component</h1>
    </DivPedidoNumero>
  );
}
