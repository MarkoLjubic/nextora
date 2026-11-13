import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import type { Env } from "./config/env.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService<Env, true>);

  app.setGlobalPrefix("api");
  app.enableCors({
    origin: config.get("CORS_ORIGIN", { infer: true }),
    credentials: true,
  });

  const port = config.get("PORT", { infer: true });
  await app.listen(port);
  Logger.log(
    `Nextora API is running on http://localhost:${port}/api`,
    "Bootstrap",
  );
}

await bootstrap();
