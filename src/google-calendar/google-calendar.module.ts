import { Module } from '@nestjs/common';
import { GoogleCalendarService } from './google-calendar.service';
import { GoogleCalendarController } from './google-calendar.controller';

@Module({
  providers: [GoogleCalendarService],
  controllers: [GoogleCalendarController],
  exports: [GoogleCalendarModule]
})
export class GoogleCalendarModule {}
