import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly logger = new Logger('AppService');

  getHello(): string {    
    return 'Hello World!';
  }
  
}
