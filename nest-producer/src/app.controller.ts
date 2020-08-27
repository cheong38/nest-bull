import { InjectQueue } from '@nestjs/bull'
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bull'

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectQueue('test') private readonly testQueue: Queue
  ) {}

  @Get()
  async getHello(): Promise<string> {
    await this.testQueue.add({ data: 1 })
    return this.appService.getHello();
  }
}
