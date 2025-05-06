import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // whitelist em true vai remover todos os atributos que nao estao no DTO
  // transform em true vai transformar o payload para o tipo do DTO
  // forbidNonWhitelisted com whitelist em true vai retornar um erro caso algum atributo nao esteja no DTO
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    // transform: true,
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
