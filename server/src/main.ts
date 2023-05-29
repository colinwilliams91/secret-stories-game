import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  // app.useStaticAssets(join(__dirname, '..', 'public')); // <-- for shared image/static assets
  // app.setBaseViewsDir(join(__dirname, '..', 'views')); // <-- for `index.html` / views (components?)

  const options = new DocumentBuilder()
    .setTitle('Secret-Stories')
    .setDescription('Competitive Creative Writing Multiplayer Web Game')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
