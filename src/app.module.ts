import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SesEventModule } from './ses-event/ses-event.module';

@Module({
  imports: [ConfigModule.forRoot(), SesEventModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
