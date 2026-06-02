# DSM-P3-G07-2026-1 — AcademyFlow

Repositório do Grupo 07 — Projeto Interdisciplinar DSM (2026/1). Este projeto implementa o sistema "AcademyFlow": uma plataforma para gerenciar eventos acadêmicos, palestras, sessões, inscrições, controle de presença e emissão de certificados.

Autor: José Paulo Archetti Conrado

**Visão geral**

O repositório contém duas aplicações principais:

- Back-end: API REST construída com Node.js, Express e Prisma (modelo MongoDB). Veja [back-end/README.md](back-end/README.md) para mais detalhe.
- Front-end: Aplicação Next.js em TypeScript (UI, autenticação e consumo da API). Veja [front-end/README.md](front-end/README.md).

**Principais funcionalidades**

- Gerenciamento de usuários (admins e participantes)
- Criação e publicação de eventos e sessões
- Inscrições de participantes e controle de presença por sessão
- Emissão e verificação de certificados em PDF
- Autenticação com tokens (JWT) e fluxo de refresh via cookies

**Estrutura do repositório**

- `back-end/` — API, scripts de seed, Prisma schema e testes (Mocha + Supertest).
- `front-end/` — Next.js app, componentes, testes e configuração do Playwright.
- `docs/` — Documentação auxiliar (Postman, guias, CSVs de importação).

Tecnologias principais: Node.js, Express, Prisma (MongoDB), Next.js, TypeScript, Tailwind CSS, Playwright.

**Pré-requisitos**

- Node.js 18+ (recomendado)
- MongoDB acessível (local ou remoto). Recomenda-se replica set para suporte Prisma + MongoDB.
- Yarn ou npm

---

Instalação e execução (resumo)

Back-end

1. Entre na pasta `back-end`:

```bash
cd back-end
npm install
```

2. Configure variáveis de ambiente (baseie-se em `.env.example`):

```text
DATABASE_URL="mongodb://localhost:27017/academyflow?replicaSet=rs0"
PORT=8888
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

3. Gerar Prisma client e rodar em modo dev:

```bash
npm run prisma:generate
npm run dev
```

O servidor por padrão fica em `http://localhost:8888`.

Front-end

1. Entre em `front-end` e instale dependências:

```bash
cd front-end
npm install
```

2. Configure `NEXT_PUBLIC_API_BASE_URL` em `.env.local` apontando para o back-end (ex: `http://localhost:8888`).

3. Executar em dev:

```bash
npm run dev
```

**Banco de dados e modelos**

O back-end utiliza Prisma com provider `mongodb`. O schema principal está em [back-end/prisma/schema.prisma](back-end/prisma/schema.prisma) e define modelos como `User`, `Event`, `EventSession`, `Registration`, `Attendance` e `Certificate`.

**Documentação da API**

O back-end inclui documentação básica em [back-end/README.md](back-end/README.md) e exemplos de chamadas em [docs/postman.md](docs/postman.md). Rotas principais incluem `/auth`, `/users`, `/events`, `/registrations`, `/speakers`, `/certificates` e endpoints de presença por sessão.

**Testes**

- Back-end: `npm test` (Mocha + Supertest). Execução de smoke tests e scripts auxiliares estão em `back-end/scripts/`.
- Front-end: testes e2e com Playwright (`npx playwright test`).

**Scripts úteis**

- `back-end`: `npm run dev`, `npm start`, `npm run seed`, `npm run smoke`, `npm test`.
- `front-end`: `npm run dev`, `npm run build`, `npm run start`, `npm run test:e2e`.

**Boas práticas e observações**

- Arquivos de certificado são servidos por `/uploads` no back-end.
- O front-end consome a API usando cookies para autenticação/refresh por padrão.
- CORS já vem preparado para portas de desenvolvimento (`3000`, `3001`).

**Contribuindo**

1. Abra uma issue descrevendo a mudança.
2. Crie um branch com nome descritivo.
3. Envie PR com descrição clara e testes quando aplicável.

**Próximos passos sugeridos**

- Configurar CI (ex.: GitHub Actions) para rodar testes do back-end e front-end.
- Publicar documentação OpenAPI/Swagger para facilitar integração.

---

Licença

Este repositório é mantido pelos autores do projeto (uso acadêmico). Adicione uma licença se desejar publicá-lo com termos específicos.

Contato

Autor: José Paulo Archetti Conrado
