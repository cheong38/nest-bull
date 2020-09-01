import { InjectQueue } from '@nestjs/bull'
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bull'

@Controller()
export class AppController {
  constructor(
    @InjectQueue('test') private readonly testQueue: Queue
  ) {}

  @Get()
  async getHello(): Promise<string> {
    await this.testQueue.add({ data: 1 })
    return 'hello'
  }
}
