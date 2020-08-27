import { BullModule } from '@nestjs/bull'
import { Module } from '@nestjs/common'

import { TestConsumer } from './test.consumer'

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'test',
      redis: {
        host: 'localhost',
        port: 6379
      }
    })
  ],
  controllers: [],
  providers: [TestConsumer],
})
export class AppModule {}
