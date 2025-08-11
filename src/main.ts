import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // configuracion CORS para el enlace HTTP
  app.enableCors({
    origin: 'http://localhost:4200',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
