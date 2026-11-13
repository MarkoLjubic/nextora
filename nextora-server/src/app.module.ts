import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { envSchema, type Env } from "./config/env.js";
import { buildDataSourceOptions } from "./database/data-source-options.js";
import { HealthModule } from "./health/health.module.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: envSchema,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<Env, true>) => ({
        ...buildDataSourceOptions({
          host: config.get("DB_HOST", { infer: true }),
          port: config.get("DB_PORT", { infer: true }),
          username: config.get("DB_USERNAME", { infer: true }),
          password: config.get("DB_PASSWORD", { infer: true }),
          database: config.get("DB_NAME", { infer: true }),
          logging: config.get("DB_LOGGING", { infer: true }),
        }),
        autoLoadEntities: true,
      }),
    }),
    HealthModule,
  ],
})
export class AppModule {}
