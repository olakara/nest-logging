
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BunyanLoggerService } from './bunyan-logger.service';

const seq = require('bunyan-seq');

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    bufferLogs: true,
  });

  app.useLogger(new BunyanLoggerService({      
        projectId: 'NestJS-Microservice',
        formatterOptions: {
          outputMode: 'short',
          color: true,
        },
        customStreams:[seq.createStream({serverUrl: 'http://localhost:5341', apiKey: '123456789'})]  ,
        extraFields: {
          app: 'extra-field-app',
          sample: 'extra-field-sample'
        }    
    }));

  await app.listen(3000);
}
bootstrap();
