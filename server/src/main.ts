import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';

const PORT = process.env.SERVER_PORT;
const DOMAIN = process.env.INSTANCE_DOMAIN;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useStaticAssets(join(__dirname, 'views')); // <-- for shared image/static assets
  app.setBaseViewsDir(join(__dirname, 'views')); // <-- for `index.html` / views (components?)
  app.setViewEngine('hbs');

  const options = new DocumentBuilder()
    .setTitle('Secret-Stories')
    .setDescription('Competitive Creative Writing Multiplayer Web Game')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
  console.log(`Nest Server Bootstrapped and Listening on ${DOMAIN}:${PORT}`);
}
bootstrap();
