# nextora-server

NestJS API za Nextora, sa PostgreSQL bazom preko TypeORM-a.

## Preduslovi

- Node.js 22+
- Docker (baza se vrti u kontejneru)

## Pokretanje

```bash
# 1. Baza (iz root-a projekta)
docker compose up -d

# 2. Env fajl
cp .env.example .env

# 3. Zavisnosti i server
npm install
npm run start:dev
```

API sluša na `http://localhost:3000/api`.

Provera da je sve živo:

```bash
curl http://localhost:3000/api/health
# {"status":"ok","info":{"database":{"status":"up",...}},...}
```

`/api/health` vraća **200** kad baza odgovara i **503** kad ne odgovara, pa može
direktno da se koristi kao readiness probe.

## Baza

Postgres 17 iz `docker-compose.yml` u root-u projekta. Na hostu je mapiran na
**5433**, jer je 5432 zauzet drugim projektom.

```bash
docker compose up -d        # pokreni
docker compose down         # zaustavi (podaci ostaju)
docker compose down -v      # zaustavi i obriši podatke
docker exec -it nextora-postgres psql -U nextora -d nextora   # psql konzola
```

## Migracije

`synchronize` je isključen — šemu menjaju isključivo migracije. TypeORM CLI ne
ume da pročita TypeScript sa dekoratorima, pa migracione skripte prvo pokreću
`npm run build` i rade nad `dist/` izlazom. Sami fajlovi migracija se pišu kao
TypeScript u `src/database/migrations/`.

```bash
# Prazna migracija koju pišeš ručno
npm run migration:create -- src/database/migrations/NazivMigracije

# Migracija izvedena iz razlike između entiteta i baze
npm run migration:generate -- src/database/migrations/NazivMigracije

npm run migration:run       # primeni
npm run migration:revert    # vrati poslednju
npm run migration:show      # šta je primenjeno
```

## Struktura

```
src/
├─ config/env.ts                  Zod šema za .env; validira se na startu
├─ database/
│  ├─ data-source-options.ts      opcije koje dele aplikacija i CLI
│  ├─ data-source.ts              DataSource koji koristi TypeORM CLI
│  └─ migrations/                 migracije
├─ health/                        GET /api/health
├─ app.module.ts
└─ main.ts
```

## Skripte

| Komanda | Šta radi |
| --- | --- |
| `npm run start:dev` | server sa watch-om |
| `npm run build` | kompajlira u `dist/` |
| `npm run lint` | oxlint |
| `npm test` | unit testovi (vitest) |
| `npm run test:e2e` | e2e testovi — traže pokrenutu bazu |
