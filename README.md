# Como rodar este projeto

Siga os passos abaixo para executar o projeto localmente:

1. **Baixar o MySQLWorkbench**

```
Dentro do mysql rodar o script sql
```

1. **Clone o repositório**

```bash

Front - git clone https://github.com/viitor14/front-tudo-voip.git
Back - git clone https://github.com/viitor14/back-tudo-voip.git

cd front-tudo-voip
cd back-tudo-voip
```

2. **Instale as dependências (Back e Front)**

```bash
npm install
```

2. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias conforme o exemplo do `.env.example` (se houver). Se não tiver o '.env.example' desconciderar

4. **No CMD dentro da pasta do projeto inicie**

```bash
  1.Back - npx sequelize-cli db:seed:all (Criar um usuario adm local e regiões)

  2.Back - npm run dev

  3.Front - npm start
```

5. **Acesse no navegador**

Abra [http://localhost:3002](http://localhost:3002) para visualizar o projeto em execução.

---

**Observações:**

- Certifique-se de ter o Node.js
