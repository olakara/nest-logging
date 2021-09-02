import { NestFactory } from '@nestjs/core';
import { BunyanLoggerService } from "@nest-toolbox/bunyan-logger";
import { AppModule } from './app.module';
const seq = require('bunyan-seq');

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useLogger(new BunyanLoggerService({      
        projectId: 'NestJS-Microservice',
        formatterOptions: {
          outputMode: 'long',
        },
        customStreams:[seq.createStream({serverUrl: 'http://localhost:5341', apiKey: '123456789'})]      
    }));
  await app.listen(3000);
}
bootstrap();
