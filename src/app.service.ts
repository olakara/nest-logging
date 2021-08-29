import { Get, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly logger = new Logger('AppService');

  getHello(): string {
    this.logger.verbose('getHello method was called!');
    return 'Hello World!';
  }

  
}
