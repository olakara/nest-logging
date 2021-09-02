import { Get, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly logger = new Logger('AppService');

  getHello(): string {
    this.logger.warn({user: 'Abdel Raoof', service: 'AppService'}, '{user} access the service at {service}');
    return 'Hello World!';
  }

  
}
