import { Module } from '@nestjs/common';
import { SesEventService } from './ses-event.service';
import { SesEventController } from './ses-event.controller';

@Module({
  controllers: [SesEventController],
  providers: [SesEventService],
})
export class SesEventModule {}
