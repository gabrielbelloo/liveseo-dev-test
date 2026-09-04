# 05 - Backend (NestJS)

API REST simples com `GET /users` e `POST /users`, dados mantidos em memória.

## Pré-requisitos

- Node.js
- npm

## Como rodar

1. 
```bash
# dentro da pasta challenges/05-nest-backend/backend
npm install
npm run start:dev
```

2. A API sobe em `http://localhost:3000`

## Endpoints

```bash

curl -X GET http://localhost:3000/users

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Gabriel", "email": "gabrielbello@email.com"}'
```