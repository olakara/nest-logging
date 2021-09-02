import { Controller, Get, Logger} from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {

  private readonly logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    
    this.logger.log('Get Hello called!', 'AppController');
    return this.appService.getHello();
  }

  @Get('warn')
  getWarning(): string {
    this.logger.warn('Get Warning called!', 'AppController');
    return this.appService.getHello();
  }

}
