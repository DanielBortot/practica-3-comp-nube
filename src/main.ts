import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger()

  app.useGlobalPipes(new ValidationPipe({
    forbidUnknownValues: true,
    whitelist: true
  }))

  await app.listen(envs.port);
  logger.log(`App running on the port: ${envs.port}`)
}
bootstrap();
