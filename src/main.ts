import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://euphonious-dusk-f06a4a.netlify.app',
      'http://localhost:5173', // Your local Vite/React frontend
      'http://localhost:3000',
      'http://[::1]:3000',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  // app.use(express.json());
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
