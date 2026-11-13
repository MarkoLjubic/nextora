import { config as loadEnvFile } from "dotenv";
import { DataSource } from "typeorm";
import { envSchema } from "../config/env.js";
import { buildDataSourceOptions } from "./data-source-options.js";

loadEnvFile({ quiet: true });

const env = envSchema.parse(process.env);

export default new DataSource(
  buildDataSourceOptions({
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    logging: env.DB_LOGGING,
  }),
);
