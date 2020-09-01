import { BullModule } from '@nestjs/bull'
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

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
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
