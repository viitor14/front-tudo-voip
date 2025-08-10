import { DivIconNavigation, DivNavigation } from './styled';

export default function IconNavigation() {
  return (
    <DivIconNavigation>
      <DivNavigation>
        <div>
          <span data-text="1">1</span>
          <hr />
        </div>
        <p>Cliente</p>
      </DivNavigation>
      <DivNavigation>
        <div>
          <span data-text="2">2</span>
          <hr />
        </div>
        <p>Detalhes</p>
      </DivNavigation>
      <DivNavigation>
        <div>
          <span data-text="3">3</span>
          {/* Removido o hr do último item */}
        </div>
        <p>Revisão</p>
      </DivNavigation>
    </DivIconNavigation>
  );
}
