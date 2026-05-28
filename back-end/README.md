# Back-end AcademyFlow

API REST do projeto AcademyFlow, construída com Node.js, Express, Prisma e MongoDB.

## Stack

- Node.js
- Express 5
- Prisma 6
- MongoDB
- CORS, cookie-parser e morgan
- JWT, bcryptjs e multer

## Estrutura

- `src/bin/server.js` inicia o servidor HTTP
- `src/app.js` configura middlewares e rotas
- `src/controllers/` concentra a lógica dos endpoints
- `src/routes/` define as rotas da API
- `src/services/` reúne integrações e utilitários de domínio
- `src/database/client.js` expõe o cliente Prisma
- `prisma/schema.prisma` descreve os modelos do banco
- `scripts/` contém seed, smoke test e rotinas de limpeza

## Requisitos

- Node.js 18+ recomendado
- MongoDB local ou remoto com `DATABASE_URL`
- Banco com replica set para suportar o Prisma com MongoDB, conforme a URL do ambiente

## Configuração

Crie um arquivo `.env` com base em `.env.example`:

```bash
DATABASE_URL="mongodb://localhost:27017/academyflow?replicaSet=rs0"
PORT=8888
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

## Instalação e execução

```bash
npm install
npm run dev
```

O servidor sobe por padrão em `http://localhost:8888`.

## Scripts

```bash
npm run dev
npm start
npm run prisma:generate
npm run prisma:studio
npm run seed
npm run dedupe:registrations
npm run dedupe:unique
npm run smoke
npm test
npm run test:watch
```

## API

### Autenticação

- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/refresh`
- `GET /auth/me`

### Usuários

- `GET /users`
- `POST /users`
- `GET /users/:id`
- `PUT /users/:id`
- `DELETE /users/:id`

### Eventos

- `GET /events`
- `POST /events`
- `GET /events/:id`
- `PUT /events/:id`
- `DELETE /events/:id`

### Sessões de evento

- `GET /events/:eventId/sessions`
- `GET /events/:eventId/sessions/:id`
- `POST /events/:eventId/sessions`
- `PUT /events/:eventId/sessions/:id`
- `DELETE /events/:eventId/sessions/:id`
- `GET /events/:eventId/sessions/:sessionId/attendance`

### Palestrantes

- `GET /speakers`
- `POST /speakers`
- `GET /speakers/:id`
- `PUT /speakers/:id`
- `DELETE /speakers/:id`

### Inscrições

- `GET /registrations`
- `POST /registrations`
- `GET /registrations/:id`
- `PUT /registrations/:id`
- `DELETE /registrations/:id`

### Presença

- `GET /registrations/:registrationId/attendance`
- `POST /registrations/:registrationId/attendance`
- `GET /registrations/:registrationId/attendance/:attendanceId`
- `PUT /registrations/:registrationId/attendance/:attendanceId`
- `DELETE /registrations/:registrationId/attendance/:attendanceId`

### Certificados

- `POST /certificates/upload`
- `GET /certificates`
- `POST /certificates`
- `GET /certificates/:id`
- `PUT /certificates/:id`
- `DELETE /certificates/:id`

## Modelos principais

O schema Prisma cobre:

- `User`
- `Speaker`
- `Event`
- `EventSession`
- `Registration`
- `Attendance`
- `Certificate`

## Observações

- `CORS_ORIGINS` já vem preparado para os ports de desenvolvimento do front-end.
- Arquivos de certificado ficam expostos em `/uploads`.
- O front-end consome esta API com credenciais via cookie.
