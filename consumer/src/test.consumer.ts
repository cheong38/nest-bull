import { Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'

@Processor('test')
export class TestConsumer {
  @Process()
  async doJob(job: Job) {
    console.log('consumer', job.data)
  }
}
