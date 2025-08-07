import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración CORS 
  app.enableCors({
    origin: true, // Permite todos los orígenes (en producción especifica dominios)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Si necesitas enviar cookies/tokens
    allowedHeaders: 'Content-Type,Authorization,X-Requested-With,Accept',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
