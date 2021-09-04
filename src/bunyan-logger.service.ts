import { LoggerService } from '@nestjs/common';
import * as Bunyan from 'bunyan';
import * as bunyanFormat from 'bunyan-format';
import * as colors from 'colors';

export interface FormatterOptions {
  outputMode: string; // short|long|simple|json|bunyan
  color?: boolean;
  levelInString?: boolean;
  colorFromLevel?: any;
  src?: boolean;
}

/**
 *  This service was taken from @nest-toolbox/bunyan-logger and modified to make logging to seq work correctly
 */
export class BunyanLoggerService implements LoggerService {
  private readonly bunyanLogger: Bunyan;
  private isEmpty = (obj) => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;

  /**
   * Creates an instance of BunyanLoggerService.
   * @param {{
   *     projectId: string;
   *     formatterOptions: FormatterOptions;
   *     customStreams?: Bunyan.Stream[];
   *     extraFields?: {
   *       [key: string]: string;
   *     };
   *   }} options
   * @memberof BunyanLoggerService
   */
  constructor(options: {
    projectId: string;
    formatterOptions: FormatterOptions;
    customStreams?: Bunyan.Stream[];
    extraFields?: {
      [key: string]: string;
    };
  }) {
    const { projectId, formatterOptions, customStreams, extraFields } = options;
    if (projectId == null || this.isEmpty(projectId)) {
      throw new Error(`projectId is required`);
    }
    const defaultStream: Bunyan.Stream = { level: 'info', type: 'stream', stream: bunyanFormat(formatterOptions) };
    const streams: Bunyan.Stream[] = [defaultStream, ...(customStreams || [])];

    this.bunyanLogger = Bunyan.createLogger({
      level: Bunyan.INFO,
      name: projectId,
      streams: [...streams],
      ...extraFields,
    });

    this.bunyanLogger.info('Logger initialized');
  }

  public log(message: any , context?: string | any | undefined) {    
    if(typeof(context) === 'object') {
      this.bunyanLogger.info({ ...context }, message);
    } else {
      this.bunyanLogger.info(context,message)
    }
  }

  public info(message: any , context?: string | any | undefined) {    
   if(typeof(context) === 'object') {
      this.bunyanLogger.info({ ...context }, message);
    } else {
      this.bunyanLogger.info(context,message)
    }
  }

  public error(message: any, trace?: string| any | undefined, context?: string | any | undefined) {    
    this.bunyanLogger.error({ ...context, ...trace },message);
  }

  public warn(message: any, context?: string | any | undefined) {    
    if(typeof(context) === 'object') {
      this.bunyanLogger.warn({ ...context }, message);
    } else {
      this.bunyanLogger.warn(context,message)
    }  
  }
}