import type { DataSourceOptions } from "typeorm";

export interface DatabaseConnection {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  logging: boolean;
}

export function buildDataSourceOptions(
  connection: DatabaseConnection,
): DataSourceOptions {
  return {
    type: "postgres",
    host: connection.host,
    port: connection.port,
    username: connection.username,
    password: connection.password,
    database: connection.database,
    entities: ["dist/**/*.entity.js"],
    migrations: ["dist/database/migrations/*.js"],
    migrationsTableName: "migrations",
    synchronize: false,
    logging: connection.logging,
  };
}
