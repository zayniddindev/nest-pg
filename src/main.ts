import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    bodyParser: true,
  });
  app.useGlobalPipes(new ValidationPipe())
  app.useStaticAssets(join(__dirname + "../public"))
  await app.listen(3000, () => console.log(`Listening on port 3000`));
}
bootstrap();
