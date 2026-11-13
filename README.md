# Nextora

| Folder | Šta je |
| --- | --- |
| `nextora-client` | React + Vite frontend |
| `nextora-server` | NestJS API + PostgreSQL (TypeORM) |

## Pokretanje lokalno

```bash
docker compose up -d                        # Postgres na localhost:5433

cd nextora-server && cp .env.example .env
npm install && npm run start:dev            # API na localhost:3000/api

cd ../nextora-client
npm install && npm run dev                  # UI na localhost:5173
```

Detalji o bazi, migracijama i strukturi: [`nextora-server/README.md`](./nextora-server/README.md).
