import { Controller, Get, Logger} from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {

  private readonly logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {    
    this.logger.log('A log without context','AppController');
    this.logger.log('A log with context', 'AppController');
    this.logger.warn('English hello {lang}',{ lang: 'en', context: 'Sample Context' });    
    return new Date().toISOString();
  }

  @Get('warn')
  getWarning(): string {
    this.logger.warn('{user} tried access the {service} service with an expired key!',{ user: 'E73882', service: 'PurchaseOrder'});
    return this.appService.getHello();
  }

  @Get('error')
  getError(): string {
    this.logger.error(['{user} access the service at {service}',{ user: 'Aro', service: 'XYZ'}]);
    return this.appService.getHello();
  }


}
