# Projeto Desenvolvimento Web - Bimestre 2

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

---

## ⚙️ Configuração da Aplicação

1. Clonar o repositório:

```sh
git clone https://github.com/luan-tavares/unifaat-2026-dw-project
```

2. Entrar na pasta do projeto:

```sh
cd unifaat-2026-dw-project
```

3. Instalar as dependências:

```sh
npm install
```

4. Copiar o arquivo `.env` (**escolha apenas um, dependendo do seu sistema**):

Linux / Mac:
```sh
cp .env.example .env
```

Windows (CMD):
```sh
copy .env.example .env
```

5. Conferir o arquivo `.env`:

```env
POSTGRES_HOST=localhost
POSTGRES_DB=unifaat_dw
POSTGRES_PORT=6789
POSTGRES_USER=unifaat_user
POSTGRES_PASSWORD=unifaat_dw_2026

NODE_WEB_PORT=3000
```

---

## 🚀 Servidor Backend Node

6. Iniciar o servidor:

```sh
node _web.js
```

O servidor estará disponível em: http://localhost:3000

Rota de ambiente:

```sh
http://localhost:3000/ambiente
```

---

## 🐳 Docker

Após configurar o `.env`, basta subir os containers:

```sh
docker compose up
```

Com Docker Compose, a rota de ambiente fica disponível pelo Nginx:

```sh
http://localhost:8080/ambiente
```

---

## 🔄 Nodemon (Opcional)

Para desenvolvimento com reload automático:

Global:
```sh
npm install -g nodemon
nodemon _web.js
```

Local:
```sh
npm install --save-dev nodemon
./node_modules/.bin/nodemon _web.js
```

---

## 🧭 Estrutura do Projeto

- `app/`
  - Regras de negócio da aplicação.
  - `app/Controllers/`: controllers que tratam as rotas.

- `bootstrap/`
  - Inicialização da aplicação.
  - `app.js` e `config.js`.

- `config/`
  - Arquivos de configuração.

- `database/`
  - Conexões com banco de dados.
  - `database/connections/`: conexão com Postgres.

- `docker/`
  - Configurações de containers.
  - `docker/postgres/init`: scripts de inicialização do banco.

- `public/`
  - Arquivos estáticos.

- `routes/`
  - Definição das rotas HTTP.

- `storage/`
  - Armazenamento de arquivos/dados.

- `_web.js`
  - Entrypoint da aplicação.

- `.env`
  - Variáveis de ambiente.

- `.env.example`
  - Exemplo de variáveis.

- `docker-compose.yml`
  - Orquestração dos containers.

- `package.json`
  - Dependências e scripts.

---

## 📦 Containers Docker

| Container           | Host            | Porta Interna | Porta Externa (localhost) |
|--------------------|-----------------|---------------|---------------|
| postgres-container | postgres_host   | 5432          | 6789          |
| nodeweb-container  | nodeweb_host    | 3000          | -             |
| nginx-container    | localhost       | 80            | 8080          |
